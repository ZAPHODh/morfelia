"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, Clock, CheckCircle, Truck, Package, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const orders = [
    {
        id: "ORD-7291",
        date: "May 8, 2025",
        status: "Delivered",
        total: "$1,249.00",
        items: [
            {
                name: "Diamond Pendant Necklace",
                price: "$899.00",
                image: "/placeholder.svg?height=80&width=80",
            },
            {
                name: "Gold Hoop Earrings",
                price: "$350.00",
                image: "/placeholder.svg?height=80&width=80",
            },
        ],
    },
    {
        id: "ORD-6543",
        date: "April 22, 2025",
        status: "Processing",
        total: "$2,780.00",
        items: [
            {
                name: "Sapphire Tennis Bracelet",
                price: "$2,780.00",
                image: "/placeholder.svg?height=80&width=80",
            },
        ],
    },
    {
        id: "ORD-5892",
        date: "March 15, 2025",
        status: "Shipped",
        total: "$3,450.00",
        items: [
            {
                name: "Emerald Cut Diamond Ring",
                price: "$3,450.00",
                image: "/placeholder.svg?height=80&width=80",
            },
        ],
    },
    {
        id: "ORD-4721",
        date: "February 28, 2025",
        status: "Delivered",
        total: "$1,875.00",
        items: [
            {
                name: "Pearl Stud Earrings",
                price: "$625.00",
                image: "/placeholder.svg?height=80&width=80",
            },
            {
                name: "Pearl Necklace",
                price: "$1,250.00",
                image: "/placeholder.svg?height=80&width=80",
            },
        ],
    },
    {
        id: "ORD-3654",
        date: "January 10, 2025",
        status: "Cancelled",
        total: "$780.00",
        items: [
            {
                name: "Silver Charm Bracelet",
                price: "$780.00",
                image: "/placeholder.svg?height=80&width=80",
            },
        ],
    },
]

const getStatusIcon = (status: string) => {
    switch (status) {
        case "Processing":
            return <Clock className="h-4 w-4 text-blue-500" />
        case "Shipped":
            return <Truck className="h-4 w-4 text-purple-500" />
        case "Delivered":
            return <CheckCircle className="h-4 w-4 text-green-500" />
        case "Cancelled":
            return <AlertCircle className="h-4 w-4 text-red-500" />
        default:
            return <Package className="h-4 w-4 text-gold-500" />
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

export default function OrdersPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase()

        return matchesSearch && matchesStatus
    })

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-serif mb-2">My Orders</h1>
                <p className="text-muted-foreground">View and track your order history</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search orders by ID or product..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Orders</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="shipped">Shipped</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-5 mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="processing">Processing</TabsTrigger>
                    <TabsTrigger value="shipped">Shipped</TabsTrigger>
                    <TabsTrigger value="delivered">Delivered</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                    {filteredOrders.length > 0 ? (
                        <div className="space-y-4">
                            {filteredOrders.map((order) => (
                                <div key={order.id} className="border rounded-lg overflow-hidden">
                                    <div className="bg-muted p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-medium">{order.id}</h3>
                                                <Badge className={getStatusColor(order.status)} variant="outline">
                                                    <span className="flex items-center gap-1">
                                                        {getStatusIcon(order.status)}
                                                        {order.status}
                                                    </span>
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> {order.date}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="font-medium">{order.total}</p>
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/account/orders/${order.id}`}>View Details</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="space-y-4">
                                            {order.items.map((item, index) => (
                                                <div key={index} className="flex items-center gap-4">
                                                    <div className="h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                                        <Image
                                                            width={20}
                                                            height={20}
                                                            src={item.image || "/placeholder.svg"}
                                                            alt={item.name}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium">{item.name}</h4>
                                                        <p className="text-muted-foreground">{item.price}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 border rounded-lg">
                            <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium mb-2">No orders found</h3>
                            <p className="text-muted-foreground mb-6">
                                {searchQuery || statusFilter !== "all"
                                    ? "Try adjusting your search or filter criteria"
                                    : "You haven't placed any orders yet"}
                            </p>
                            <Button asChild>
                                <Link href="/shop">Start Shopping</Link>
                            </Button>
                        </div>
                    )}
                </TabsContent>

                {["processing", "shipped", "delivered", "cancelled"].map((status) => (
                    <TabsContent key={status} value={status} className="mt-0">
                        {filteredOrders.filter((order) => order.status.toLowerCase() === status).length > 0 ? (
                            <div className="space-y-4">
                                {filteredOrders
                                    .filter((order) => order.status.toLowerCase() === status)
                                    .map((order) => (
                                        <div key={order.id} className="border rounded-lg overflow-hidden">
                                            <div className="bg-muted p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-medium">{order.id}</h3>
                                                        <Badge className={getStatusColor(order.status)} variant="outline">
                                                            <span className="flex items-center gap-1">
                                                                {getStatusIcon(order.status)}
                                                                {order.status}
                                                            </span>
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <Clock className="h-3 w-3" /> {order.date}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <p className="font-medium">{order.total}</p>
                                                    <Button variant="outline" size="sm" asChild>
                                                        <Link href={`/account/orders/${order.id}`}>View Details</Link>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="space-y-4">
                                                    {order.items.map((item, index) => (
                                                        <div key={index} className="flex items-center gap-4">
                                                            <div className="h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                                                <Image
                                                                    width={20}
                                                                    height={20}
                                                                    src={item.image || "/placeholder.svg"}
                                                                    alt={item.name}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium">{item.name}</h4>
                                                                <p className="text-muted-foreground">{item.price}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 border rounded-lg">
                                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-medium mb-2">No {status} orders</h3>
                                <p className="text-muted-foreground mb-6">You don&apos;t have any orders with this status</p>
                                <Button asChild>
                                    <Link href="/shop">Continue Shopping</Link>
                                </Button>
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
