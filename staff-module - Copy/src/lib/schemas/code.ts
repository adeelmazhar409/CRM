import { z } from 'zod'

export const AddStaffCodeSchema = z.object({
    code: z.string().min(4, 'Code must be 4 digits'),
})
