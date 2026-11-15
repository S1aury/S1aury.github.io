import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    tier: z.enum(["main", "supporting"]),
    genre: z.string(),
    role: z.string(),
    summary: z.string(),
    contribution: z.string(),
    outcome: z.string(),
    decision: z.string(),
    video: z.string().optional(),
    team: z.string(),
    platform: z.string(),
    videoTitle: z.string().optional(),
    focus: z.array(z.string()),
    accent: z.enum(["rust", "violet", "olive", "blue"]),
    year: z.string().optional(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});
export const collections = { projects };
