// src/schemas/editStaffFormSchema.js
import { z } from 'zod'

export const addStaffFormSchema = z.object({
    firstname: z
        .string()
        .min(2, { message: 'Please enter a valid first name' })
        .max(10)
        .regex(/^[a-zA-Z]+$/, { message: 'First name cannot contain numbers' }),
    lastname: z
        .string()
        .min(2, { message: 'Please enter a valid last name' })
        .max(10)
        .regex(/^[a-zA-Z]+$/, { message: 'Last name cannot contain numbers' }),
    nickname: z
        .string()
        .min(2, { message: 'Please enter a valid nickname' })
        .max(10)
        .regex(/^[a-zA-Z]+$/, { message: 'Nickname cannot contain numbers' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    mobile: z
        .string()
        .min(10, { message: 'Mobile number must be at least 10 digits' })
        .max(12, { message: 'Mobile number must be at most 12 digits' })
        .regex(/^\d+$/, { message: 'Please enter a valid mobile number' }),
})
