import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("dist");
const base = (process.env.BASE_PATH || "/").replace(/\/$/, "");
const walk = async (dir) =>
  (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat();
const files = (await walk(root)).filter((f) => f.endsWith(".html"));
const failures = [];
for (const file of files) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|data:)/.test(value)) continue;
    const [rawPath, hash] = value.split("#");
    let target;
    if (!rawPath) target = file;
    else if (rawPath.startsWith("/")) {
      if (base && !rawPath.startsWith(`${base}/`)) {
        failures.push(`${file}: missing base: ${value}`);
        continue;
      }
      target = path.join(root, decodeURIComponent(rawPath.slice(base.length)));
    } else
      target = path.resolve(path.dirname(file), decodeURIComponent(rawPath));
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, "index.html");
      const data = await readFile(target, "utf8");
      if (
        hash &&
        target.endsWith(".html") &&
        !data.includes(`id="${decodeURIComponent(hash)}"`)
      )
        failures.push(`${file}: missing anchor: ${value}`);
    } catch {
      failures.push(`${file}: missing file: ${value}`);
    }
  }
  if (
    !/<html lang="en"/.test(html) ||
    !/<title>[^<]+<\/title>/.test(html) ||
    !/<main/.test(html)
  )
    failures.push(`${file}: missing document metadata or main landmark`);
}
for (const slug of [
  "hell-or-sell",
  "which-witch",
  "waltz-of-weights",
  "ratoolight",
  "humanize",
]) {
  const html = await readFile(
    path.join(root, "projects", slug, "index.html"),
    "utf8",
  );
  if ((html.match(/<h2\b/g) || []).length < 8)
    failures.push(`${slug}: fewer than eight case study sections`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${files.length} HTML pages; internal links, anchors, assets, metadata, and five case study structures. Base: ${base || "/"}`,
);
