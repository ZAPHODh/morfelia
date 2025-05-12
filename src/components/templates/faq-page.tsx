"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { faqData } from "@/lib/faq-data"
import { FaqSection } from "../faq"
import { Link } from "@/i18n/navigation"

export default function FaqPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredFaqs = faqData
        .map((section) => ({
            ...section,
            items: section.items.filter(
                (item) =>
                    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
        }))
        .filter((section) => section.items.length > 0)

    return (
        <div className="container max-w-5xl py-12 px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Frequently Asked Questions</h1>
                <p className="text-muted-foreground max-w-2xl mb-8">
                    Find answers to common questions about our jewelry, services, shipping, and more.
                </p>
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search for answers..."
                        className="pl-10 border-gold-300 focus-visible:ring-gold-200"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {filteredFaqs.length > 0 ? (
                <div className="grid gap-10">
                    {filteredFaqs.map((section) => (
                        <FaqSection key={section.id} title={section.title} items={section.items} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-muted-foreground">No results found for &quot;{searchQuery}&quot;</p>
                    <button className="mt-4 text-gold-600 hover:text-gold-700 font-medium" onClick={() => setSearchQuery("")}>
                        Clear search
                    </button>
                </div>
            )}

            <div className="mt-16 pt-8 border-t text-center">
                <h2 className="text-xl font-serif mb-4">Still have questions?</h2>
                <p className="text-muted-foreground mb-6">
                    If you couldn&apos;t find the answer you were looking for, please contact our customer service team.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-gold-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-gold-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="tel:+1234567890"
                        className="inline-flex items-center justify-center rounded-md border border-gold-200 bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
                    >
                        Call Us: (123) 456-7890
                    </Link>
                </div>
            </div>
        </div>
    )
}
