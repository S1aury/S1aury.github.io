import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    genre: z.string(),
    role: z.string(),
    summary: z.string(),
    focus: z.array(z.string()),
    accent: z.enum(["rust", "violet", "olive", "blue"]),
    year: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});
export const collections = { projects };
