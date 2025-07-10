import {z} from 'zod';

const objectIdSchema = z.string().regex(/^[a-fA-F0-9]{24}$/, "El valor debe ser un ObjectId válido")
export const paymentValidator = z.object({
    userId : objectIdSchema,
    invoiceId : z.string().min(5),
    paymentStatus : z.enum(['approved', 'pending', 'rejected']),
    paymentDateCreated : z.date().optional()
})