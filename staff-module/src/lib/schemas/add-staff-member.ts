// src/schemas/editStaffFormSchema.js
import { z } from 'zod'

export const addStaffFormSchema = z.object({
    firstname: z
        .string()
        .min(2, { message: 'Please enter a vaild first name' })
        .max(10),
    lastname: z
        .string()
        .min(2, { message: 'Please enter a vaild last name' })
        .max(10),
    nickname: z.string().min(2).max(40),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    mobile: z
        .string()
        .min(10, { message: 'Mobile number must be at least 10 digits' })
        .max(12, { message: 'Mobile number must be at most 12 digits' })
        .regex(/^\d+$/, { message: 'Please enter a valid mobile number' }),

})
