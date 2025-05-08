"use client"
import Logo from '@/../public/logo.png'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false)


    const collectionCategories = [
        { name: "New Arrivals", href: "/collections/new-arrivals" },
        { name: "Best Sellers", href: "/collections/best-sellers" },
        { name: "Summer Collection", href: "/collections/summer" },
        { name: "Winter Collection", href: "/collections/winter" },
        { name: "Limited Edition", href: "/collections/limited-edition" },
    ]

    const navItems = [
        {
            name: "Collections",
            href: "/collections",
            hasDropdown: true,
        },
        { name: "I wanna buy", href: "/shop" },
        { name: "FAQ", href: "/faq" },
        { name: "About", href: "/about" },
    ]

    return (
        <header className="w-full py-4 px-4 md:px-6">
            <div className="container mx-auto flex flex-col items-center">
                <Link href="/" className="mb-4">
                    <div className="relative h-12 w-40 bg-black">
                        <Image src={Logo.src} alt="Logo" fill className="object-contain" priority />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center justify-center space-x-8 mt-2">
                    {navItems.map((item) =>
                        item.hasDropdown ? (
                            <DropdownMenu key={item.name}>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center text-base font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none">
                                        {item.name}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="center" className="w-48">
                                    {collectionCategories.map((category) => (
                                        <DropdownMenuItem key={category.name} asChild>
                                            <Link href={category.href} className="w-full cursor-pointer">
                                                {category.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ),
                    )}
                </nav>
                <div className="md:hidden absolute left-4 top-4">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="flex flex-col space-y-6 mt-10">
                                {navItems.map((item) => (
                                    <div key={item.name} className="space-y-4">
                                        {item.hasDropdown ? (
                                            <>
                                                <button
                                                    className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                                                    onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}
                                                >
                                                    {item.name}
                                                    <ChevronRight
                                                        className={cn("h-5 w-5 transition-transform", mobileCollectionsOpen && "rotate-90")}
                                                    />
                                                </button>
                                                {mobileCollectionsOpen && (
                                                    <div className="pl-4 space-y-3 border-l border-gray-200">
                                                        {collectionCategories.map((category) => (
                                                            <Link
                                                                key={category.name}
                                                                href={category.href}
                                                                className="block text-base text-gray-600 hover:text-gray-900 transition-colors"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {category.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
