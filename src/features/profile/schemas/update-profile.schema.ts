import { z } from 'zod';

export const updateProfileSchema = z.object({
  name: z.string().trim().min(3).max(100).optional(),

  username: z.string().trim().min(3).max(30).optional(),

  phone: z.string().trim().min(10).max(15).optional(),

  bio: z.string().trim().max(500).optional(),

  avatar: z.instanceof(File).optional(),

  avatarUrl: z.url().optional(),
});

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;
