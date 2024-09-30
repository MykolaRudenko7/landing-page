import { z } from 'zod'

export const contactFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'Name is required')
      .max(20, 'Maximum length is 20 characters')
      .regex(/^[a-zA-Zа-яА-Я ,.'-]+$/, 'You need to enter only letters.'),
    lastName: z
      .string()
      .max(20, 'Maximum length is 20 characters')
      .regex(/^[a-zA-Zа-яА-Я ,.'-]+$/, 'You need to enter only letters.')
      .optional(),
    email: z.string().email('Email is not valid').max(50, 'Maximum length is 50 characters'),
    phone: z.string(),
    country: z.object({
      value: z
        .string()
        .max(30, 'Maximum length is 30 characters')
        .regex(/^[^/\\:*?<>]+$/, 'Input cannot have the following characters: / \\ : * ? < >'),
      label: z.string(),
      code: z.string(),
    }),
    messageArea: z.string().max(300, 'Maximum length is 300 characters').optional(),
  })
  .refine(
    (data) => {
      if (data.country.code === 'ua') {
        return data.phone.length >= 12
      }

      return true
    },
    {
      message: 'Minimum length is 12 characters for Ukraine',
      path: ['phone'],
    },
  )
