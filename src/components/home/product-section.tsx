import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard, type Product } from "../products/product-card"



interface ProductSectionProps {
    title: string
    subtitle?: string
    products: Product[]
    viewAllLink: string
    viewAllText?: string
    variant?: "default" | "compact" | "featured"
    limit?: number
    className?: string
}

export function ProductSection({
    title,
    subtitle,
    products,
    viewAllLink,
    viewAllText = "Ver Todos",
    variant = "default",
    limit = 4,
    className = "",
}: ProductSectionProps) {
    // Limit the number of products to display
    const displayProducts = products.slice(0, limit)

    const gridClass =
        variant === "compact"
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            : variant === "featured"
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

    return (
        <section className={`py-12 ${className}`}>
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold">{title}</h2>
                        {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
                    </div>
                    <Button variant="link" asChild className="mt-2 sm:mt-0 text-primary">
                        <Link href={viewAllLink} className="flex items-center">
                            {viewAllText}
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className={`grid ${gridClass} gap-6`}>
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} variant={variant} />
                    ))}
                </div>
            </div>
        </section>
    )
}
