import ProductListingPage from "@/components/products/product-listing-page"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Shop Jewelry",
    description: "Browse our exquisite collection of fine jewelry, including rings, necklaces, earrings, and bracelets.",
}

export default function ShopPage() {
    return <ProductListingPage />
}
