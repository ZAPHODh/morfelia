"use server"

import { ContactSchema, contactSchema } from "@/lib/schemas/contact-form"






export async function submitContactForm(data: ContactSchema) {

    const validatedData = contactSchema.parse(data)

    console.log("Contact form submission:", validatedData)

    return {
        success: true,
        message: "Mensagem enviada com sucesso!",
    }
}
