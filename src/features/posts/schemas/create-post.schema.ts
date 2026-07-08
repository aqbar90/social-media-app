import { z } from 'zod';

export const createPostSchema = z.object({
  image: z.instanceof(File),

  caption: z.string().trim().max(500).optional(),
});

export type CreatePostFormValues = z.infer<typeof createPostSchema>;
