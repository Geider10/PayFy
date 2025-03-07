import {z} from 'zod';

const objectIdSchema = z.string().regex(/^[a-fA-F0-9]{24}$/, "El valor debe ser un ObjectId válido")
export const paymentSchema = z.object({
    userId : objectIdSchema,
    serviceId : z.string().min(2),
    paymentMethodId : objectIdSchema,
    paymentAmount : z.number().min(0),
    paymentStatus : z.enum(['approved', 'pending', 'rejected']),
    paymentDateCreated : z.date().optional()
})