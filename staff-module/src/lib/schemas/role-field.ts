import { z } from 'zod'

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
