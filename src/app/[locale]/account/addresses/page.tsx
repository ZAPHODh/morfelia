import type { Metadata } from "next"
import AddressesPage from "@/components/account/addresses-page"

export const metadata: Metadata = {
    title: "My Addresses",
    description: "Manage your shipping and billing addresses",
}

export default function Addresses() {
    return <AddressesPage />
}
