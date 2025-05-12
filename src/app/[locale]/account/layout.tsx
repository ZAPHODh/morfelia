import type React from "react"
import type { Metadata } from "next"
import AccountLayout from "@/components/account/account-layout"

export const metadata: Metadata = {
    title: "My Account",
    description: "Manage your account, orders, and preferences",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <AccountLayout>{children}</AccountLayout>
}
