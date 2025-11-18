import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    client: z.string().optional(),
    description: z.string().optional(),
    technicalDescription: z.string().optional(),
    website: z.string().optional(),
    status: z.string().optional(),
    statusLight: z.string().optional(),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  projects,
};
