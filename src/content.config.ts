import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    order: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services };
