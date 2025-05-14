"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
    ArrowLeft,
    Clock,
    CheckCircle,
    Truck,
    Package,
    AlertCircle,
    MapPin,
    CreditCard,
    Download,
    MessageSquare,
    RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { orders } from "../../../mocks/order"
import Image from "next/image"


const getStatusIcon = (status: string) => {
    switch (status) {
        case "Processing":
            return <Clock className="h-5 w-5 text-blue-500" />
        case "Shipped":
            return <Truck className="h-5 w-5 text-purple-500" />
        case "Delivered":
            return <CheckCircle className="h-5 w-5 text-green-500" />
        case "Cancelled":
            return <AlertCircle className="h-5 w-5 text-red-500" />
        default:
            return <Package className="h-5 w-5 text-gold-500" />
    }
}

const getStatusColor = (status: string) => {
    switch (status) {
        case "Processing":
            return "bg-blue-100 text-blue-800 hover:bg-blue-200"
        case "Shipped":
            return "bg-purple-100 text-purple-800 hover:bg-purple-200"
        case "Delivered":
            return "bg-green-100 text-green-800 hover:bg-green-200"
        case "Cancelled":
            return "bg-red-100 text-red-800 hover:bg-red-200"
        default:
            return "bg-gold-100 text-gold-800 hover:bg-gold-200"
    }
}

export default function OrderDetailsPage({ orderId }: { orderId: string }) {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const [order, setOrder] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [progressValue, setProgressValue] = useState(0)

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true)
            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 500))

            const foundOrder = orders.find((o) => o.id === orderId)
            setOrder(foundOrder || null)
            setLoading(false)

            // Calculate progress value based on timeline
            if (foundOrder) {
                const completedSteps = foundOrder.timeline.filter((step) => step.completed).length
                const totalSteps = foundOrder.timeline.length
                setProgressValue(Math.round((completedSteps / totalSteps) * 100))
            }
        }

        fetchOrder()
    }, [orderId])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 rounded-full border-4 border-gold-200 border-t-gold-500 animate-spin"></div>
                    <p className="text-muted-foreground">Loading order details...</p>
                </div>
            </div>
        )
    }

    if (!order) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/account/orders">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-serif">Order Not Found</h1>
                </div>

                <div className="text-center py-12 border rounded-lg">
                    <AlertCircle className="h-12 w-12 mx-auto text-red-500 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Order #{orderId} not found</h3>
                    <p className="text-muted-foreground mb-6">
                        We couldn&apos;t find the order you&apos;re looking for. It may have been removed or the ID is incorrect.
                    </p>
                    <Button asChild>
                        <Link href="/account/orders">Return to Orders</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href="/account/orders">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-serif">Order #{order.id}</h1>
                    <Badge className={getStatusColor(order.status)} variant="outline">
                        <span className="flex items-center gap-1">
                            {getStatusIcon(order.status)}
                            {order.status}
                        </span>
                    </Badge>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Invoice
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" />
                        Support
                    </Button>
                    {order.status !== "Delivered" && order.status !== "Cancelled" && (
                        <Button variant="outline" size="sm" className="gap-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                            Cancel Order
                        </Button>
                    )}
                </div>
            </div>

            <div className="text-sm text-muted-foreground">Placed on {order.date}</div>

            {order.status !== "Cancelled" && (
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-medium">Order Progress</CardTitle>
                        <CardDescription>
                            {order.status === "Delivered"
                                ? `Delivered on ${order.deliveryDate}`
                                : order.status === "Shipped"
                                    ? `Estimated delivery by ${order.estimatedDelivery}`
                                    : "Tracking your order status"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Order Placed</span>
                                    <span>Delivered</span>
                                </div>
                                <Progress value={progressValue} className="h-2" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* eslint-disable  @typescript-eslint/no-explicit-any */}
                                {order.timeline.map((step: any, index: number) => (
                                    <div key={index} className={`p-3 rounded-lg border ${step.completed ? "bg-muted" : ""}`}>
                                        <div className="flex items-start gap-3">
                                            <div className={`mt-0.5 rounded-full p-1 ${step.completed ? "bg-green-100" : "bg-muted"}`}>
                                                {step.completed ? (
                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                ) : (
                                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium">{step.status}</p>
                                                {step.completed ? (
                                                    <p className="text-sm text-muted-foreground">
                                                        {step.date} at {step.time}
                                                    </p>
                                                ) : (
                                                    <p className="text-sm text-muted-foreground">Pending</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {order.trackingNumber && (
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 bg-muted rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Truck className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">Tracking Number:</span>
                                        <span className="text-sm">{order.trackingNumber}</span>
                                    </div>
                                    <div className="ml-auto">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={order.trackingUrl} target="_blank" rel="noopener noreferrer">
                                                Track Package
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-5">
                        {/* eslint-disable  @typescript-eslint/no-explicit-any */}
                        {order.items.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-4 pb-5 border-b last:border-0 last:pb-0">
                                <div className="h-24 w-24 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                    <Image width={24} height={24} src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                        <div>
                                            <h4 className="font-medium">{item.name}</h4>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                            <p className="text-sm text-muted-foreground">Product ID: {item.id}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{item.price}</p>
                                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                        </div>
                                    </div>

                                    {order.status === "Delivered" && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <Button variant="outline" size="sm">
                                                Write a Review
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Buy Again
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>{order.subtotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>{order.shipping === "$0.00" ? "Free" : order.shipping}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Tax</span>
                                <span>{order.tax}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-medium">
                                <span>Total</span>
                                <span>{order.total}</span>
                            </div>

                            <div className="pt-3">
                                <div className="flex items-center gap-2 text-sm">
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">Payment Method:</span>
                                    <span>{order.paymentMethod}</span>
                                </div>
                            </div>

                            {order.status === "Cancelled" && (
                                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100">
                                    <h4 className="text-sm font-medium text-red-800 mb-1">Order Cancelled</h4>
                                    <p className="text-xs text-red-700">Reason: {order.cancellationReason}</p>
                                    <p className="text-xs text-red-700">Cancelled on: {order.cancellationDate}</p>
                                    {order.refundStatus && (
                                        <p className="text-xs text-red-700 mt-1">
                                            Refund Status: {order.refundStatus} on {order.refundDate}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-5">
                            <div>
                                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    Shipping Address
                                </h4>
                                <div className="text-sm">
                                    <p className="font-medium">{order.shippingAddress.name}</p>
                                    <p>{order.shippingAddress.street}</p>
                                    <p>
                                        {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                                    </p>
                                    <p>{order.shippingAddress.country}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                                    <Truck className="h-4 w-4 text-muted-foreground" />
                                    Shipping Method
                                </h4>
                                <p className="text-sm">{order.shippingMethod}</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="billing">
                                    <AccordionTrigger className="text-sm font-medium">Billing Address</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="text-sm pt-2">
                                            <p className="font-medium">{order.billingAddress.name}</p>
                                            <p>{order.billingAddress.street}</p>
                                            <p>
                                                {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zip}
                                            </p>
                                            <p>{order.billingAddress.country}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
                <Button variant="outline" asChild>
                    <Link href="/account/orders" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Orders
                    </Link>
                </Button>

                <div className="flex flex-wrap gap-2">
                    {order.status === "Delivered" && (
                        <Button variant="outline" className="gap-1">
                            <RefreshCw className="h-4 w-4" />
                            Return Item
                        </Button>
                    )}
                    <Button variant="outline" className="gap-1">
                        <MessageSquare className="h-4 w-4" />
                        Contact Support
                    </Button>
                </div>
            </div>
        </div>
    )
}
