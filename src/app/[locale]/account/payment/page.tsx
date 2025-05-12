import type { Metadata } from "next"
import PaymentMethodsPage from "@/components/account/payment-methods-page"

export const metadata: Metadata = {
    title: "Payment Methods - Elegance Jewelry",
    description: "Manage your saved payment methods",
}

export default function PaymentMethods() {
    return <PaymentMethodsPage />
}
