import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    order: z.number().int(),
    status: z.string(),
    tools: z.array(z.string()),
    hero: z.string(),
    heroAlt: z.string(),
    category: z.string(),
    result: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string() })),
  }),
});

export const collections = { projects };
