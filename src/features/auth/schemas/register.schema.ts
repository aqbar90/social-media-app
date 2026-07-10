import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, 'Name must be at least 3 characters.')
      .max(100, 'Name must not exceed 100 characters.'),

    username: z
      .string()
      .trim()
      .min(3, 'Username must be at least 3 characters.')
      .max(30, 'Username must not exceed 30 characters.')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Username may only contain letters, numbers, and underscores.'
      ),

    email: z.email('Email is invalid.'),

    phone: z
      .string()
      .trim()
      .min(8, 'Phone number is invalid.')
      .max(20, 'Phone number is invalid.'),

    password: z.string().min(8, 'Password must be at least 8 characters.'),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
