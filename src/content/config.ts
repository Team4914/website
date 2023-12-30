// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false).optional(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      credits: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    season: z.enum(["2023", "2024"]),
    credits: z.string().default("VPCI Robotics Team"),
    team: z.enum(["24484", "24485"]),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
