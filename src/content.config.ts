import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.string(),
    categoryType: z.enum(['saas', 'library', 'api', 'open-source']),
    demoUrl: z.string().url(),
    repoUrl: z.string().url(),
    newsletterUrl: z.string().url().optional(),
    officialUrl: z.string().url(),
    publishedAt: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = { tools };
