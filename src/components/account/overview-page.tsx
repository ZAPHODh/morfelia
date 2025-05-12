import Link from "next/link"
import { ShoppingBag, Heart, Gift, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AccountOverview() {
    // Mock data for demonstration
    const recentOrders = [
        {
            id: "ORD-7291",
            date: "May 8, 2025",
            status: "Delivered",
            total: "$1,249.00",
            items: [
                { name: "Diamond Pendant Necklace", price: "$899.00" },
                { name: "Gold Hoop Earrings", price: "$350.00" },
            ],
        },
        {
            id: "ORD-6543",
            date: "April 22, 2025",
            status: "Processing",
            total: "$2,780.00",
            items: [{ name: "Sapphire Tennis Bracelet", price: "$2,780.00" }],
        },
    ]

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border border-gold-100">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Profile" />
                        <AvatarFallback className="text-lg font-medium">JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-2xl font-serif">Welcome back, Jane</h1>
                        <p className="text-muted-foreground">Member since April 2023</p>
                    </div>
                </div>
                <Button asChild>
                    <Link href="/account/settings">Edit Profile</Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2">
                            <ShoppingBag className="h-4 w-4 text-gold-600" />
                            Orders
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-medium">7</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                            <Link href="/account/orders">
                                View Orders
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2">
                            <Heart className="h-4 w-4 text-gold-600" />
                            Wishlist
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-medium">12</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                            <Link href="/account/wishlist">
                                View Wishlist
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2">
                            <Gift className="h-4 w-4 text-gold-600" />
                            Rewards
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-medium">320 pts</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                            <Link href="/rewards">
                                View Rewards
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Recent Orders</CardTitle>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/account/orders">View All</Link>
                        </Button>
                    </div>
                    <CardDescription>Your recent purchases and their status</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {recentOrders.map((order) => (
                            <div key={order.id} className="border rounded-lg p-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-medium">{order.id}</h3>
                                            <Badge
                                                variant={order.status === "Delivered" ? "outline" : "default"}
                                                className={order.status === "Delivered" ? "" : "bg-gold-600"}
                                            >
                                                {order.status}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Clock className="h-3 w-3" /> {order.date}
                                        </p>
                                    </div>
                                    <p className="font-medium">{order.total}</p>
                                </div>
                                <div className="space-y-2">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex justify-between text-sm">
                                            <span>{item.name}</span>
                                            <span>{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t flex justify-end">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/account/orders/${order.id}`}>Order Details</Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
