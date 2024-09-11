import { z } from 'zod'

export const ImageUploadSchema = z.object({
    image: z
        .instanceof(File, { message: 'Please upload a file.' })
        .refine((f) => f.size < 100_000, 'Max 100 kB upload size.')
})
