import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/components/products/product-card"

interface FeaturedProductProps {
    product: Product
    reverse?: boolean
}

export function FeaturedProduct({ product, reverse = false }: FeaturedProductProps) {
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

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
            <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                />
                {product.onSale && (
                    <Badge className="absolute top-4 left-4 bg-red-500  px-3 py-1 text-sm">
                        {discountPercentage}% OFF
                    </Badge>
                )}
            </div>
            <div className="space-y-6">
                {product.isNew && <Badge className=" px-3 py-1">Novo</Badge>}
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className="text-muted-foreground text-lg">{product.description}</p>

                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                </div>

                {(product.materials?.length || product.gemstones?.length) && (
                    <div className="space-y-2">
                        {product.materials && product.materials.length > 0 && (
                            <p className="text-sm">
                                <span className="font-medium">Material:</span> {product.materials.join(", ")}
                            </p>
                        )}
                        {product.gemstones && product.gemstones?.length > 0 && (
                            <p className="text-sm">
                                <span className="font-medium">Pedras:</span> {product.gemstones.join(", ")}
                            </p>
                        )}
                    </div>
                )}

                <div className="flex gap-4 pt-4">
                    <Button size="lg" asChild >
                        <Link href={`/product/${product.id}`}>Ver Detalhes</Link>
                    </Button>
                    <Button size="lg" variant="outline">
                        Adicionar ao Carrinho
                    </Button>
                </div>
            </div>
        </div>
    )
}
