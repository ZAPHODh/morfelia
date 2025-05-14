import OrderDetailsPage from "@/components/account/order-datails-page"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Order Details",
    description: "View the details of your order",
}

export default async function OrderDetails({ params }: { params: Promise<{ orderId: string }> }) {
    return <OrderDetailsPage orderId={(await params).orderId} />
}
