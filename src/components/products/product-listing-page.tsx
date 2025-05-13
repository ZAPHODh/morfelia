"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
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
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { products } from "@/lib/product-data"
import { useIsMobile } from "@/hooks/use-mobile"
import { ProductGrid } from "./product-grid"
import { Pagination } from "./pagination"
import { Link } from "@/i18n/navigation"
import { useLocale } from "next-intl"


type PriceRange = [number, number]
type SortOption = "featured" | "newest" | "price-asc" | "price-desc" | "best-selling"

export default function ProductListingPage() {
    const searchParams = useSearchParams()
    const isMobile = useIsMobile()


    const initialCategory = searchParams.get("category") || "all"
    const initialSort = (searchParams.get("sort") as SortOption) || "featured"
    const initialSearch = searchParams.get("search") || ""
    const initialMinPrice = Number(searchParams.get("minPrice")) || 0
    const initialMaxPrice = Number(searchParams.get("maxPrice")) || 10000

    const locale = useLocale()
    const [category, setCategory] = useState<string>(initialCategory)
    const [priceRange, setPriceRange] = useState<PriceRange>([initialMinPrice, initialMaxPrice])
    const [sortOption, setSortOption] = useState<SortOption>(initialSort)
    const [searchQuery, setSearchQuery] = useState(initialSearch)
    const [materials, setMaterials] = useState<string[]>([])
    const [gemstones, setGemstones] = useState<string[]>([])
    const [activeFilters, setActiveFilters] = useState<string[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12

    const filteredProducts = products.filter((product) => {
        if (category !== "all" && product.category !== category) return false

        if (product.price < priceRange[0] || product.price > priceRange[1]) return false

        if (materials.length > 0 && !materials.some((material) => product.materials.includes(material))) return false

        if (gemstones.length > 0 && !gemstones.some((gemstone) => product.gemstones.includes(gemstone))) return false

        if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

        return true
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case "newest":
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            case "price-asc":
                return a.price - b.price
            case "price-desc":
                return b.price - a.price
            case "best-selling":
                return b.soldCount - a.soldCount
            default:
                return a.featured ? -1 : b.featured ? 1 : 0
        }
    })


    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    useEffect(() => {
        const params = new URLSearchParams()

        if (category !== "all") params.set("category", category)
        if (sortOption !== "featured") params.set("sort", sortOption)
        if (searchQuery) params.set("search", searchQuery)
        if (priceRange[0] > 0) params.set("minPrice", priceRange[0].toString())
        if (priceRange[1] < 10000) params.set("maxPrice", priceRange[1].toString())

        const url = `${locale}/products${params.toString() ? `?${params.toString()}` : ""}`
        window.history.replaceState({}, "", url)

        // Update active filters
        const newActiveFilters: string[] = []
        if (category !== "all") newActiveFilters.push(`Category: ${category}`)
        if (priceRange[0] > 0 || priceRange[1] < 10000)
            newActiveFilters.push(`Price: $${priceRange[0]} - $${priceRange[1]}`)
        materials.forEach((material) => newActiveFilters.push(`Material: ${material}`))
        gemstones.forEach((gemstone) => newActiveFilters.push(`Gemstone: ${gemstone}`))
        setActiveFilters(newActiveFilters)

        // Reset to first page when filters change
        setCurrentPage(1)
    }, [category, priceRange, sortOption, searchQuery, materials, gemstones])

    // Handle material toggle
    const handleMaterialToggle = (material: string) => {
        setMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
    }

    // Handle gemstone toggle
    const handleGemstoneToggle = (gemstone: string) => {
        setGemstones((prev) => (prev.includes(gemstone) ? prev.filter((g) => g !== gemstone) : [...prev, gemstone]))
    }

    // Handle filter removal
    const handleRemoveFilter = (filter: string) => {
        const [type, value] = filter.split(": ")

        switch (type) {
            case "Category":
                setCategory("all")
                break
            case "Price":
                setPriceRange([0, 10000])
                break
            case "Material":
                setMaterials((prev) => prev.filter((m) => m !== value))
                break
            case "Gemstone":
                setGemstones((prev) => prev.filter((g) => g !== value))
                break
        }
    }

    // Clear all filters
    const clearAllFilters = () => {
        setCategory("all")
        setPriceRange([0, 10000])
        setSortOption("featured")
        setSearchQuery("")
        setMaterials([])
        setGemstones([])
    }

    // Format price for display
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price)
    }

    // Filter components
    const FilterControls = () => (
        <div className="space-y-6 mx-auto">
            <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                    {["all", "rings", "necklaces", "earrings", "bracelets", "watches"].map((cat) => (
                        <div key={cat} className="flex items-center">
                            <button
                                className={`text-sm capitalize ${category === cat ? "text-gold-700 font-medium" : "text-muted-foreground"}`}
                                onClick={() => setCategory(cat)}
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
                <div className="space-y-4">
                    <Slider
                        value={priceRange}
                        min={0}
                        max={10000}
                        step={100}
                        onValueChange={(value) => setPriceRange(value as PriceRange)}
                        className="py-4"
                    />
                    <div className="flex items-center justify-between">
                        <div className="border rounded-md px-2 py-1 text-sm">{formatPrice(priceRange[0])}</div>
                        <div className="text-sm text-muted-foreground">to</div>
                        <div className="border rounded-md px-2 py-1 text-sm">{formatPrice(priceRange[1])}</div>
                    </div>
                </div>
            </div>

            <Separator />

            <div>
                <h3 className="font-medium mb-3">Materials</h3>
                <div className="space-y-2">
                    {["Gold", "Silver", "Platinum", "Rose Gold", "White Gold"].map((material) => (
                        <div key={material} className="flex items-center space-x-2">
                            <Checkbox
                                id={`material-${material}`}
                                checked={materials.includes(material)}
                                onCheckedChange={() => handleMaterialToggle(material)}
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
                                checked={gemstones.includes(gemstone)}
                                onCheckedChange={() => handleGemstoneToggle(gemstone)}
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

    return (
        <div className="container max-w-7xl py-8 px-4 md:px-6 mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-6">
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                </Link>
                <span className="mx-2 text-muted-foreground">/</span>
                <span>Shop</span>
                {category !== "all" && (
                    <>
                        <span className="mx-2 text-muted-foreground">/</span>
                        <span className="capitalize">{category}</span>
                    </>
                )}
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-serif mb-2">
                        {category === "all" ? "All Jewelry" : `${category.charAt(0).toUpperCase() + category.slice(1)}`}
                    </h1>
                    <p className="text-muted-foreground">
                        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} available
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search jewelry..."
                            className="pl-10 w-full sm:w-[250px]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
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
                                <FilterControls />
                                <div className="flex justify-between mt-8 pt-4 border-t">
                                    <SheetClose asChild>
                                        <Button variant="outline" onClick={clearAllFilters}>
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
                                <button onClick={() => handleRemoveFilter(filter)}>
                                    <X className="h-3 w-3" />
                                </button>
                            </Badge>
                        ))}
                        <Button variant="link" size="sm" onClick={clearAllFilters} className="text-gold-600 hover:text-gold-700">
                            Clear All
                        </Button>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-8">

                {!isMobile && (
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="sticky top-8 space-y-2">
                            <div className="flex items-center gap-2 mb-4">
                                <SlidersHorizontal className="h-5 w-5" />
                                <h2 className="font-medium">Filters</h2>
                            </div>
                            <FilterControls />
                            <div className="pt-4 mt-6">
                                <Button variant="outline" size="sm" onClick={clearAllFilters} className="w-full">
                                    Clear All Filters
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Product grid */}
                <div className="flex-1">
                    {currentProducts.length > 0 ? (
                        <>
                            <ProductGrid products={currentProducts} />

                            {/* Pagination */}
                            <div className="mt-8">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={Math.ceil(sortedProducts.length / productsPerPage)}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16 border rounded-lg">
                            <h3 className="text-lg font-medium mb-2">No products found</h3>
                            <p className="text-muted-foreground mb-6">Try adjusting your filters or search criteria</p>
                            <Button onClick={clearAllFilters}>Clear All Filters</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
