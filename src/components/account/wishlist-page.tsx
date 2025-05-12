"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// Mock data for demonstration
const wishlistItems = [
    {
        id: "1",
        name: "Diamond Solitaire Ring",
        price: "$2,499.00",
        originalPrice: "$2,999.00",
        image: "/placeholder.svg?height=200&width=200",
        inStock: true,
        isOnSale: true,
        dateAdded: "May 2, 2025",
    },
    {
        id: "2",
        name: "Pearl Drop Earrings",
        price: "$899.00",
        originalPrice: null,
        image: "/placeholder.svg?height=200&width=200",
        inStock: true,
        isOnSale: false,
        dateAdded: "April 28, 2025",
    },
    {
        id: "3",
        name: "Gold Chain Bracelet",
        price: "$1,250.00",
        originalPrice: null,
        image: "/placeholder.svg?height=200&width=200",
        inStock: false,
        isOnSale: false,
        dateAdded: "April 15, 2025",
    },
    {
        id: "4",
        name: "Sapphire Pendant Necklace",
        price: "$1,899.00",
        originalPrice: "$2,199.00",
        image: "/placeholder.svg?height=200&width=200",
        inStock: true,
        isOnSale: true,
        dateAdded: "March 30, 2025",
    },
    {
        id: "5",
        name: "Emerald Cut Diamond Earrings",
        price: "$3,450.00",
        originalPrice: null,
        image: "/placeholder.svg?height=200&width=200",
        inStock: true,
        isOnSale: false,
        dateAdded: "March 22, 2025",
    },
    {
        id: "6",
        name: "Rose Gold Wedding Band",
        price: "$1,150.00",
        originalPrice: null,
        image: "/placeholder.svg?height=200&width=200",
        inStock: true,
        isOnSale: false,
        dateAdded: "March 10, 2025",
    },
    {
        id: "7",
        name: "Vintage Diamond Brooch",
        price: "$2,750.00",
        originalPrice: "$3,200.00",
        image: "/placeholder.svg?height=200&width=200",
        inStock: false,
        isOnSale: true,
        dateAdded: "February 28, 2025",
    },
    {
        id: "8",
        name: "Men's Platinum Watch",
        price: "$4,999.00",
        originalPrice: null,
        image: "/placeholder.svg?height=200&width=200",
        inStock: true,
        isOnSale: false,
        dateAdded: "February 15, 2025",
    },
]

export default function WishlistPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [items, setItems] = useState(wishlistItems)

    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const handleRemoveItem = (id: string) => {
        setItems(items.filter((item) => item.id !== id))
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-serif mb-2">My Wishlist</h1>
                <p className="text-muted-foreground">
                    {items.length} {items.length === 1 ? "item" : "items"} saved to your wishlist
                </p>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search your wishlist..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                            <div className="relative h-48 bg-muted">
                                <Image fill src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                                {item.isOnSale && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                                {!item.inStock && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <Badge variant="outline" className="bg-black/80 text-white border-white">
                                            Out of Stock
                                        </Badge>
                                    </div>
                                )}
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute top-2 right-2 bg-white hover:bg-white/90 text-red-500"
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Remove from wishlist</span>
                                </Button>
                            </div>
                            <CardHeader className="p-4 pb-0">
                                <CardTitle className="text-base">{item.name}</CardTitle>
                                <CardDescription>Added on {item.dateAdded}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                                <div className="flex items-center gap-2">
                                    <p className="font-medium">{item.price}</p>
                                    {item.originalPrice && (
                                        <p className="text-sm text-muted-foreground line-through">{item.originalPrice}</p>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex gap-2">
                                <Button className="flex-1" disabled={!item.inStock}>
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Add to Cart
                                </Button>
                                <Button variant="outline" size="icon" asChild>
                                    <Link href={`/product/${item.id}`}>
                                        <span className="sr-only">View details</span>→
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 border rounded-lg">
                    <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                    <p className="text-muted-foreground mb-6">
                        {searchQuery
                            ? `No items matching "${searchQuery}" found in your wishlist`
                            : "Save your favorite items to purchase later"}
                    </p>
                    <Button asChild>
                        <Link href="/shop">Browse Jewelry</Link>
                    </Button>
                </div>
            )}

            {items.length > 0 && (
                <div className="flex justify-between items-center pt-4 border-t">
                    <Button variant="outline" onClick={() => setItems([])}>
                        Clear Wishlist
                    </Button>
                    <Button asChild>
                        <Link href="/shop">Continue Shopping</Link>
                    </Button>
                </div>
            )}
        </div>
    )
}
