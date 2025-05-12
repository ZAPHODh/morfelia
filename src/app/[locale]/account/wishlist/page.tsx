import type { Metadata } from "next"
import WishlistPage from "@/components/account/wishlist-page"

export const metadata: Metadata = {
    title: "My Wishlist",
    description: "View and manage your wishlist items",
}

export default function Wishlist() {
    return <WishlistPage />
}
