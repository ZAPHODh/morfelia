import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, ShoppingCart, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

import { ReviewForm } from "@/components/review-form"
import { ImageGallery } from "@/components/ui/image-gallery"
import { SizeSelector } from "@/components/ui/size-sellector"
import { ShareButtons } from "@/components/share-button"
import { products } from "../../../../../mocks/product"




async function getProduct(slug: string): Promise<Product | null> {
    console.log(slug)
    // try {
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/products/${slug}`, {
    //         next: { revalidate: 3600 }, 
    //     })

    //     if (!response.ok) {
    //         return null
    //     }

    //     return await response.json()
    // } catch (error) {
    //     console.error("Error fetching product:", error)
    //     return null
    // }
    return products[0]
}

async function getSuggestedProducts(category: Category): Promise<Product[]> {
    console.log(category)
    return [products[0], products[1]]
}

export async function generateMetadata(props: { params: Promise<{ slug: string, locale: string }> }) {
    const product = await getProduct((await props.params).slug)

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested product could not be found",
        }
    }
    return {
        title: product.metadata.title["en"] || product.name["en"],
        description: product.metadata.description["en"],
        openGraph: {
            title: product.metadata.openGraph.title["en"],
            description: product.metadata.openGraph.description["en"],
            images: product.metadata.openGraph.image ? [product.metadata.openGraph.image] : undefined,
        },
        icons: {
            icon: product.metadata.icons.url,
        },
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const product = await getProduct((await params).slug)

    if (!product) {
        notFound()
    }

    const suggestedProducts = await getSuggestedProducts(product.category)
    const language = "en"

    const formatPrice = (price: Price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: price.currency,
        }).format(price.value)
    }
    const averageRating =
        product.comments && product.comments.length > 0
            ? product.comments.reduce((acc, comment) => acc + comment.stars, 0) / product.comments.length
            : 0

    const whatsappLink = `https://wa.me/?text=I'm interested in this product: ${product.name[language]} - ${formatPrice(product.price[language])}`

    const categoryName = typeof product.category === "string" ? product.category : product.category

    const breadcrumbItems = [
        {
            label: categoryName,
            href: `${product.category}`,
        },
        {
            label: product.name[language],
            href: `/product/${product.slug}`,
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    {product.images && product.images.length > 0 ? (
                        <ImageGallery images={product.images} productName={product.name[language]} />
                    ) : (
                        <Card className="overflow-hidden">
                            <CardContent className="p-4">
                                <div className="relative aspect-square overflow-hidden rounded-lg">
                                    <Image
                                        src="/placeholder.svg?height=600&width=600"
                                        alt={product.name[language]}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
                <div className="space-y-6">
                    <Card className="overflow-hidden border-none">
                        <CardContent className="p-6 space-y-6">
                            <div>
                                <Badge variant="outline" className="mb-2">
                                    {categoryName}
                                </Badge>
                                <h1 className="text-3xl font-bold">{product.name[language]}</h1>

                                <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.round(averageRating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">({product.comments?.length || 0} reviews)</span>
                                </div>
                            </div>

                            <p className="text-lg font-semibold">{formatPrice(product.price[language])}</p>

                            <p className="text-muted-foreground">{product.shortDescription}</p>
                            {product.sizes && product.sizes.length > 0 && (
                                <div className="space-y-2">
                                    <label htmlFor="size-select" className="block text-sm font-medium">
                                        Size
                                    </label>
                                    <SizeSelector sizes={product.sizes} />
                                </div>
                            )}
                            <div className="pt-2">
                                <ShareButtons
                                    url={`/product/${product.slug}`}
                                    title={product.name[language]}
                                    description={product.shortDescription}
                                    image={product.images[0]?.src}
                                />
                            </div>
                            <div className="pt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <Button className="w-full" size="lg">
                                        <ShoppingCart className="mr-2 h-5 w-5" />
                                        Buy Now
                                    </Button>
                                    <Button variant="secondary" className="w-full" size="lg">
                                        <ShoppingCart className="mr-2 h-5 w-5" />
                                        Add to Cart
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                    <Button variant="outline" className="w-full" size="lg" asChild>
                                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="mr-2 h-5 w-5" />
                                            Contact on WhatsApp
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full" size="lg" asChild>
                                        <Link href="/">Keep Shopping</Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>


            <div className="space-y-8">
                <Card className="border-none">
                    <CardHeader>
                        <CardTitle>Product Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="prose max-w-none">
                            <h3 className="text-lg font-medium mb-4">Description</h3>
                            <div className="text-muted-foreground">{product.description}</div>
                        </div>

                        {product.materials && Object.keys(product.materials).length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-lg font-medium mb-4">Materials & Specifications</h3>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    {Object.entries(product.materials).map(([key, value]) => (
                                        <li key={key}>
                                            <span className="font-medium">{key}:</span> {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="mt-8">
                            <h3 className="text-lg font-medium mb-4">Care Instructions</h3>
                            <p className="text-muted-foreground">
                                To maintain the beauty of your jewelry, avoid contact with harsh chemicals and store in a cool, dry
                                place. Clean with a soft cloth and mild soap solution when needed.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-none">
                    <CardHeader>
                        <CardTitle>Customer Reviews ({product.comments?.length || 0})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {product.comments && product.comments.length > 0 ? (
                                product.comments.map((comment) => (
                                    <div key={comment.id} className="border rounded-lg p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-medium">User #{comment.userId.substring(0, 8)}</p>
                                                <div className="flex mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < comment.stars ? "fill-primary text-primary" : "text-muted-foreground"}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-muted-foreground">{comment.content}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-muted-foreground py-8">No reviews yet</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
                <ReviewForm productId={product.id} />
            </div>

            <section className="mt-16">
                <h2 className="text-2xl font-bold mb-6">You might also like</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Suspense fallback={<SuggestedProductsSkeleton />}>
                        {suggestedProducts.length > 0 ? (
                            suggestedProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <Link href={`/products/${product.slug}`} className="group">
                                        <div className="relative aspect-square overflow-hidden">
                                            <Image
                                                src={product.images[0]?.src || "/placeholder.svg?height=300&width=300"}
                                                alt={product.images[0]?.alt || product.name[language]}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-medium truncate">{product.name[language]}</h3>
                                            <p className="text-sm text-muted-foreground">{formatPrice(product.price[language])}</p>
                                        </CardContent>
                                    </Link>
                                </Card>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-muted-foreground py-8">No suggested products available</p>
                        )}
                    </Suspense>
                </div>
            </section>
        </main>
    )
}

function SuggestedProductsSkeleton() {
    return (
        <>
            {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                    <Skeleton className="aspect-square rounded-lg" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-20" />
                </div>
            ))}
        </>
    )
}
