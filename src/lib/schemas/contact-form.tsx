import { z } from "zod";


export const contactSchema = z.object({
    name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z.string().optional(),
    department: z.string({ required_error: "Por favor selecione um departamento" }),
    message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
    consent: z.boolean().refine((val) => val === true, {
        message: "Você precisa concordar com a política de privacidade",
    }),
})

export type ContactSchema = z.infer<typeof contactSchema>