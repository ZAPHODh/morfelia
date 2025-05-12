import type { Metadata } from "next"
import OrdersPage from "@/components/account/orders-page"

export const metadata: Metadata = {
    title: "My Orders",
    description: "View your order history and track current orders",
}

export default function Orders() {
    return <OrdersPage />
}
