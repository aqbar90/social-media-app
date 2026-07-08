import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Name must be at least 3 characters.')
    .max(100, 'Name must not exceed 100 characters.'),

  username: z
    .string()
    .trim()
    .min(3, 'Username must be at least 3 characters.')
    .max(30, 'Username must not exceed 30 characters.'),

  email: z.email('Email is invalid.'),

  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .max(15, 'Phone number must not exceed 15 digits.'),

  password: z.string().min(8, 'Password must be at least 8 characters.'),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
