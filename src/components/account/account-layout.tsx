"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, ShoppingBag, Heart, Settings, MapPin, CreditCard, Bell, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

interface NavItem {
    title: string
    href: string
    icon: React.ReactNode
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isMobile = useIsMobile()
    const [isClient, setIsClient] = useState(false)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const navItems: NavItem[] = [
        {
            title: "Overview",
            href: "/account",
            icon: <User className="h-5 w-5" />,
        },
        {
            title: "Orders",
            href: "/account/orders",
            icon: <ShoppingBag className="h-5 w-5" />,
        },
        {
            title: "Wishlist",
            href: "/account/wishlist",
            icon: <Heart className="h-5 w-5" />,
        },
        {
            title: "Personal Information",
            href: "/account/settings",
            icon: <Settings className="h-5 w-5" />,
        },
        {
            title: "Addresses",
            href: "/account/addresses",
            icon: <MapPin className="h-5 w-5" />,
        },
        {
            title: "Payment Methods",
            href: "/account/payment",
            icon: <CreditCard className="h-5 w-5" />,
        },
        {
            title: "Notifications",
            href: "/account/notifications",
            icon: <Bell className="h-5 w-5" />,
        },
    ]

    const NavLinks = () => (
        <nav className="space-y-1">
            {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                    <Link
                        onClick={() => setOpen(false)}
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "bg-gold-100 text-gold-900" : "text-muted-foreground hover:bg-gold-50 hover:text-gold-900"
                            }`}
                    >
                        {item.icon}
                        {item.title}
                    </Link>
                )
            })}
            <div className="pt-6">
                <Button variant="outline" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive">
                    <LogOut className="h-5 w-5" />
                    Sign Out
                </Button>
            </div>
        </nav>
    )

    if (!isClient) {
        return null
    }

    return (
        <div className="container max-w-6xl py-8 px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {isMobile ? (
                    <div className="flex items-center justify-between border-b pb-4 mb-4">
                        <h1 className="text-2xl font-serif">My Account</h1>
                        <DropdownMenu open={open} onOpenChange={setOpen}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[300px] p-4 mr-6">
                                <div className="space-y-1">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href
                                        return (
                                            <DropdownMenuItem key={item.href} asChild>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setOpen(false)}
                                                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "bg-gold-100 text-gold-900" : "text-muted-foreground hover:bg-gold-50 hover:text-gold-900"
                                                        }`}
                                                >
                                                    {item.icon}
                                                    {item.title}
                                                </Link>
                                            </DropdownMenuItem>
                                        )
                                    })}
                                    <div className="pt-4">
                                        <DropdownMenuItem asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
                                                onClick={() => setOpen(false)}
                                            >
                                                <LogOut className="h-5 w-5" />
                                                Sign Out
                                            </Button>
                                        </DropdownMenuItem>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <div className="md:w-1/4 lg:w-1/5">
                        <div className="sticky top-8">
                            <h2 className="text-xl font-serif mb-6">My Account</h2>
                            <NavLinks />
                        </div>
                    </div>
                )}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}
