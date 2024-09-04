// src/schemas/editStaffFormSchema.js
import { z } from 'zod'

export const editStaffFormSchema = z.object({
    firstname: z
        .string()
        .min(2, { message: 'Please enter a vaild first name' })
        .max(40),
    lastname: z
        .string()
        .min(2, { message: 'Please enter a vaild last name' })
        .max(40),
    nickname: z.string().min(2).max(40),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    mobile: z
        .string()
        .min(10, { message: 'Mobile number must be at least 10 digits' })
        .max(12, { message: 'Mobile number must be at most 12 digits' })
        .regex(/^\d+$/, { message: 'Please enter a valid mobile number' }),
})


export const RadioButtonSchema = z.object({
    role: z
        .enum(['', 'Service Staff', 'Kitchen Staff', 'Manager', 'Owner'], {
            required_error: 'Role is required',
            invalid_type_error: 'Invalid role',
        })
        .refine(
            (value) => value !== undefined && value !== null && value !== '',
            {
                message: 'Assign a role to continue.',
            }
        ),
})

export const AddStaffCodeSchema = z.object({
    code: z.string().min(4, 'Code must be 4 digits'),
})
