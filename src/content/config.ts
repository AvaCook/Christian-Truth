import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    description: z.string().optional(),
  }),
});

export const collections = {
  chapters,
};
