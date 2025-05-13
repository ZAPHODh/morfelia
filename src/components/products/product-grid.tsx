import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/product-data"
import Image from "next/image"

interface ProductGridProps {
    products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

interface ProductCardProps {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    // Format price
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price)
    }

    // Calculate discount percentage
    const discountPercentage = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0

    return (
        <div className="group relative border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {/* Product image */}
            <div className="relative h-64 bg-muted overflow-hidden">
                <Link href={`/product/${product.id}`}>
                    <Image
                        fill
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && <Badge className="bg-blue-500">New</Badge>}
                    {product.originalPrice && <Badge className="bg-red-500">-{discountPercentage}%</Badge>}
                    {product.featured && <Badge className="bg-gold-600">Featured</Badge>}
                </div>

                <div className="absolute top-2 right-2">
                    <Button variant="outline" size="icon" aria-label="Add to wishlist">
                        <Heart className="h-4 w-4 " />
                    </Button>
                </div>

                {/* Quick view and add to cart */}
                <div className="absolute bottom-0 left-0 right-0 p-2 flex gap-2 opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                    <Button variant="secondary" asChild>
                        <Link href={`/products/${product.id}`}>Quick View</Link>
                    </Button>
                    <Button className="flex-1">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </Button>
                </div>
            </div>

            {/* Product info */}
            <div className="p-4">
                <div className="flex items-center gap-1 mb-1">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-3.5 w-3.5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                </div>

                <Link href={`/product/${product.id}`} className="block">
                    <h3 className="font-medium line-clamp-1 hover:text-gold-700 transition-colors">{product.name}</h3>
                </Link>

                <div className="flex items-center gap-2 mt-1">
                    <span className="font-medium">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                </div>

                <div className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</div>

                <div className="mt-3 flex flex-wrap gap-1">
                    {product.materials.map((material) => (
                        <Badge key={material} variant="outline" className="text-xs bg-muted/50">
                            {material}
                        </Badge>
                    ))}
                    {product.gemstones.length > 0 &&
                        product.gemstones.map((gemstone) => (
                            <Badge key={gemstone} variant="outline" className="text-xs bg-muted/50">
                                {gemstone}
                            </Badge>
                        ))}
                </div>
            </div>
        </div>
    )
}
