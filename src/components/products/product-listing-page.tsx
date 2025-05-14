"use client"

import { useState, useEffect, useMemo } from "react"
import { Filter, SlidersHorizontal, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ProductGrid } from "./product-grid"
import { Pagination } from "./pagination"
import { useIsMobile } from "@/hooks/use-mobile"
import { PriceRangeSlider } from "./price-range-slider"
import { useProductFilters } from "@/hooks/use-product-filters"
import { Link } from "@/i18n/navigation"

export default function ProductListingPage() {
    const isMobile = useIsMobile()
    const [isMounted, setIsMounted] = useState(false)

    const { filters, dispatch, paginatedProducts, totalPages, activeFilters, formatPrice, isPending } =
        useProductFilters(12)

    // Initialize component
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Filter controls component
    const FilterControls = useMemo(() => {
        return (
            <div className="space-y-6 mx-auto">
                <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                        {["all", "rings", "necklaces", "earrings", "bracelets", "watches"].map((cat) => (
                            <div key={cat} className="flex items-center">
                                <button
                                    className={`text-sm capitalize ${filters.category === cat ? "text-gold-700 font-medium" : "text-muted-foreground"
                                        }`}
                                    onClick={() => dispatch({ type: "SET_CATEGORY", payload: cat })}
                                >
                                    {cat === "all" ? "All Jewelry" : cat}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator />

                <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    {isMounted && (
                        <PriceRangeSlider
                            min={0}
                            max={10000}
                            initialMin={filters.priceRange[0]}
                            initialMax={filters.priceRange[1]}
                            step={100}
                            formatPrice={formatPrice}
                            onRangeChange={(min, max) => dispatch({ type: "SET_PRICE_RANGE", payload: [min, max] })}
                        />
                    )}
                </div>

                <Separator />

                <div>
                    <h3 className="font-medium mb-3">Materials</h3>
                    <div className="space-y-2">
                        {["Gold", "Silver", "Platinum", "Rose Gold", "White Gold"].map((material) => (
                            <div key={material} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`material-${material}`}
                                    checked={filters.materials.includes(material)}
                                    onCheckedChange={() => dispatch({ type: "TOGGLE_MATERIAL", payload: material })}
                                />
                                <Label htmlFor={`material-${material}`} className="text-sm">
                                    {material}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator />

                <div>
                    <h3 className="font-medium mb-3">Gemstones</h3>
                    <div className="space-y-2">
                        {["Diamond", "Sapphire", "Ruby", "Emerald", "Pearl", "Amethyst"].map((gemstone) => (
                            <div key={gemstone} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`gemstone-${gemstone}`}
                                    checked={filters.gemstones.includes(gemstone)}
                                    onCheckedChange={() => dispatch({ type: "TOGGLE_GEMSTONE", payload: gemstone })}
                                />
                                <Label htmlFor={`gemstone-${gemstone}`} className="text-sm">
                                    {gemstone}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }, [filters, isMounted, formatPrice, dispatch])

    return (
        <div className="container max-w-7xl py-8 px-4 md:px-6 mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-6">
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                </Link>
                <span className="mx-2 text-muted-foreground">/</span>
                <span>Shop</span>
                {filters.category !== "all" && (
                    <>
                        <span className="mx-2 text-muted-foreground">/</span>
                        <span className="capitalize">{filters.category}</span>
                    </>
                )}
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-serif mb-2">
                        {filters.category === "all"
                            ? "All Jewelry"
                            : `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}`}
                    </h1>
                    <p className="text-muted-foreground">
                        {paginatedProducts.length} {paginatedProducts.length === 1 ? "product" : "products"} available
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search jewelry..."
                            className="pl-10 w-full sm:w-[250px]"
                            value={filters.search}
                            onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
                        />
                        {filters.search && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground hover:text-foreground"
                                onClick={() => dispatch({ type: "SET_SEARCH", payload: "" })}
                                aria-label="Clear search"
                            >
                                <X className="h-3.5 w-3.5" />
                            </Button>
                        )}
                    </div>
                    {/* eslint-disable  @typescript-eslint/no-explicit-any */}
                    <Select value={filters.sort} onValueChange={(value) => dispatch({ type: "SET_SORT", payload: value as any })}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="price-asc">Price: Low to High</SelectItem>
                            <SelectItem value="price-desc">Price: High to Low</SelectItem>
                            <SelectItem value="best-selling">Best Selling</SelectItem>
                        </SelectContent>
                    </Select>

                    {isMobile && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="w-full sm:w-auto">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full sm:max-w-md overflow-auto">
                                <SheetHeader className="mb-5">
                                    <SheetTitle>Filters</SheetTitle>
                                    <SheetDescription>Refine your search with the following filters</SheetDescription>
                                </SheetHeader>
                                {FilterControls}
                                <div className="flex justify-between mt-8 pt-4 border-t">
                                    <SheetClose asChild>
                                        <Button variant="outline" onClick={() => dispatch({ type: "RESET_FILTERS" })}>
                                            Clear All
                                        </Button>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Button>Apply Filters</Button>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    )}
                </div>
            </div>

            {/* Active filters */}
            {activeFilters.length > 0 && (
                <div className="mb-6">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium">Active Filters:</span>
                        {activeFilters.map((filter) => (
                            <Badge key={filter} variant="outline" className="flex items-center gap-1 bg-muted">
                                {filter}
                                <button onClick={() => dispatch({ type: "REMOVE_FILTER", payload: filter })}>
                                    <X className="h-3 w-3" />
                                </button>
                            </Badge>
                        ))}
                        <Button
                            variant="link"
                            size="sm"
                            onClick={() => dispatch({ type: "RESET_FILTERS" })}
                            className="text-gold-600 hover:text-gold-700"
                        >
                            Clear All
                        </Button>
                    </div>
                </div>
            )}

            {/* Main content */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar filters - desktop */}
                {!isMobile && (
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="sticky top-8 space-y-2">
                            <div className="flex items-center gap-2 mb-4">
                                <SlidersHorizontal className="h-5 w-5" />
                                <h2 className="font-medium">Filters</h2>
                            </div>
                            {FilterControls}
                            <div className="pt-4 mt-6">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => dispatch({ type: "RESET_FILTERS" })}
                                    className="w-full"
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Product grid */}
                <div className="flex-1">
                    {paginatedProducts.length > 0 ? (
                        <>
                            <div className={isPending ? "opacity-70 transition-opacity duration-200" : ""}>
                                <ProductGrid products={paginatedProducts} />
                            </div>

                            {/* Pagination */}
                            <div className="mt-8">
                                <Pagination
                                    currentPage={filters.page}
                                    totalPages={totalPages}
                                    onPageChange={(page) => dispatch({ type: "SET_PAGE", payload: page })}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16 border rounded-lg">
                            <h3 className="text-lg font-medium mb-2">No products found</h3>
                            <p className="text-muted-foreground mb-6">Try adjusting your filters or search criteria</p>
                            <Button onClick={() => dispatch({ type: "RESET_FILTERS" })}>Clear All Filters</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
