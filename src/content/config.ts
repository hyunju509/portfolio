import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string().or(z.number()),
    location: z.string().optional(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(0)
  })
});

export const collections = { projects };