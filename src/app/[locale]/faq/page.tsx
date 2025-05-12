import FaqPage from "@/components/templates/faq-page"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "FAQ",
    description: "Frequently asked questions about our items, shipping, returns, and more.",
}

export default function FAQ() {
    return <FaqPage />
}
