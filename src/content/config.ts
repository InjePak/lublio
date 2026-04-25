import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

const grammar = defineCollection({
  type: "content",
  schema: z.object({
    language: z.string(),
    title: z.string(),
    translation: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog: blog, grammar: grammar };
