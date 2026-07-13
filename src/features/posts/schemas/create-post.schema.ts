import { z } from 'zod';

export const createPostSchema = z
  .object({
    image: z.instanceof(File).nullable(),

    caption: z
      .string()
      .trim()
      .min(1, 'Caption is required.')
      .max(500, 'Caption must be at most 500 characters.'),
  })
  .superRefine((data, ctx) => {
    if (!data.image) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['image'],
        message: 'Please upload an image.',
      });
    }
  });

export type CreatePostSchema = z.infer<typeof createPostSchema>;
