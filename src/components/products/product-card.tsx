import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface Product {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number | null
    images: string[]
    category: string
    materials?: string[]
    gemstones?: string[]
    rating?: number
    reviewCount?: number
    inStock?: boolean
    isNew?: boolean
    featured?: boolean
    onSale?: boolean
    seasonal?: boolean
}

interface ProductCardProps {
    product: Product
    variant?: "default" | "compact" | "featured"
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
    // Format price
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price)
    }

    // Calculate discount percentage
    const discountPercentage = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0

    if (variant === "compact") {
        return (
            <Link href={`/product/${product.id}`} className="group block">
                <div className="relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                    <div className="relative aspect-square">
                        <Image
                            src={product.images[0] || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.onSale && <Badge className="absolute top-2 left-2 bg-red-500">-{discountPercentage}%</Badge>}
                    </div>
                    <div className="p-3">
                        <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="font-medium">{formatPrice(product.price)}</span>
                            {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    if (variant === "featured") {
        return (
            <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative aspect-square overflow-hidden">
                        <Image
                            src={product.images[0] || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.onSale && <Badge className="absolute top-2 left-2 bg-red-500">-{discountPercentage}%</Badge>}
                        {product.isNew && <Badge className="absolute top-2 right-2 bg-blue-500">Novo</Badge>}
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                            <p className="text-muted-foreground line-clamp-3 mb-4">{product.description}</p>
                            {product.rating && (
                                <div className="flex items-center gap-1 mb-2">
                                    <div className="flex">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < (product.rating ?? 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xl font-medium">{formatPrice(product.price)}</span>
                                {product.originalPrice && (
                                    <span className="text-sm text-muted-foreground line-through">
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <Button className="flex-1" asChild>
                                    <Link href={`/product/${product.id}`}>Ver Detalhes</Link>
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Heart className="h-4 w-4" />
                                    <span className="sr-only">Adicionar aos favoritos</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Default variant
    return (
        <div className="group relative border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {/* Product image */}
            <div className="relative h-64 bg-muted overflow-hidden">
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && <Badge className="bg-blue-500">Novo</Badge>}
                    {product.onSale && <Badge className="bg-red-500">-{discountPercentage}%</Badge>}
                    {product.featured && <Badge className="bg-gold-600">Destaque</Badge>}
                    {product.seasonal && <Badge className="bg-green-500">Sazonal</Badge>}
                </div>

                {/* Quick actions */}
                <div className="absolute top-2 right-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-white/80 hover:bg-white"
                        aria-label="Adicionar aos favoritos"
                    >
                        <Heart className="h-4 w-4 text-red-500" />
                    </Button>
                </div>

                {/* Quick view and add to cart */}
                <div className="absolute bottom-0 left-0 right-0 p-2 flex gap-2 opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                    <Button variant="secondary" className="flex-1 bg-white/90 hover:bg-white" asChild>
                        <Link href={`/product/${product.id}`}>Ver Detalhes</Link>
                    </Button>
                    <Button className="flex-1">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Comprar
                    </Button>
                </div>
            </div>

            {/* Product info */}
            <div className="p-4">
                {product.rating && (
                    <div className="flex items-center gap-1 mb-1">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-3.5 w-3.5 ${i < (product.rating ?? 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                    </div>
                )}

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

                {(product.materials?.length || product.gemstones?.length) && (
                    <div className="mt-3 flex flex-wrap gap-1">
                        {product.materials?.map((material) => (
                            <Badge key={material} variant="outline" className="text-xs bg-muted/50">
                                {material}
                            </Badge>
                        ))}
                        {product.gemstones?.map((gemstone) => (
                            <Badge key={gemstone} variant="outline" className="text-xs bg-muted/50">
                                {gemstone}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
