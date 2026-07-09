import { z } from 'zod';

export const createCommentSchema = z.object({
  text: z.string().trim().min(1, 'Comment is required.').max(500),
});

export type CreateCommentFormValues = z.infer<typeof createCommentSchema>;
