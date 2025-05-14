"use client"

import { useState, useEffect, useMemo, useCallback, useTransition } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { products } from "@/lib/product-data"
import { debounce } from "@/lib/utils"

export type FilterState = {
    category: string
    priceRange: [number, number]
    materials: string[]
    gemstones: string[]
    search: string
    sort: SortOption
    page: number
}

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc" | "best-selling"

export type FilterAction =
    | { type: "SET_CATEGORY"; payload: string }
    | { type: "SET_PRICE_RANGE"; payload: [number, number] }
    | { type: "TOGGLE_MATERIAL"; payload: string }
    | { type: "TOGGLE_GEMSTONE"; payload: string }
    | { type: "SET_SEARCH"; payload: string }
    | { type: "SET_SORT"; payload: SortOption }
    | { type: "SET_PAGE"; payload: number }
    | { type: "RESET_FILTERS" }
    | { type: "REMOVE_FILTER"; payload: string }
    | { type: "SYNC_WITH_URL"; payload: FilterState }

export function useProductFilters(itemsPerPage = 12) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [isPending, startTransition] = useTransition()

    // Initialize state from URL
    const initialState: FilterState = {
        category: searchParams.get("category") || "all",
        priceRange: [Number(searchParams.get("minPrice")) || 0, Number(searchParams.get("maxPrice")) || 10000],
        materials: searchParams.get("materials")?.split(",").filter(Boolean) || [],
        gemstones: searchParams.get("gemstones")?.split(",").filter(Boolean) || [],
        search: searchParams.get("search") || "",
        sort: (searchParams.get("sort") as SortOption) || "featured",
        page: Number(searchParams.get("page")) || 1,
    }

    const [filters, setFilters] = useState<FilterState>(initialState)

    // Reducer-like function to update filters
    const dispatch = useCallback((action: FilterAction) => {
        setFilters((prevFilters) => {
            switch (action.type) {
                case "SET_CATEGORY":
                    return { ...prevFilters, category: action.payload, page: 1 }
                case "SET_PRICE_RANGE":
                    return { ...prevFilters, priceRange: action.payload, page: 1 }
                case "TOGGLE_MATERIAL": {
                    const materials = prevFilters.materials.includes(action.payload)
                        ? prevFilters.materials.filter((m) => m !== action.payload)
                        : [...prevFilters.materials, action.payload]
                    return { ...prevFilters, materials, page: 1 }
                }
                case "TOGGLE_GEMSTONE": {
                    const gemstones = prevFilters.gemstones.includes(action.payload)
                        ? prevFilters.gemstones.filter((g) => g !== action.payload)
                        : [...prevFilters.gemstones, action.payload]
                    return { ...prevFilters, gemstones, page: 1 }
                }
                case "SET_SEARCH":
                    return { ...prevFilters, search: action.payload, page: 1 }
                case "SET_SORT":
                    return { ...prevFilters, sort: action.payload }
                case "SET_PAGE":
                    return { ...prevFilters, page: action.payload }
                case "RESET_FILTERS":
                    return {
                        category: "all",
                        priceRange: [0, 10000],
                        materials: [],
                        gemstones: [],
                        search: "",
                        sort: "featured",
                        page: 1,
                    }
                case "REMOVE_FILTER": {
                    const [type, value] = action.payload.split(": ")
                    switch (type) {
                        case "Category":
                            return { ...prevFilters, category: "all", page: 1 }
                        case "Price":
                            return { ...prevFilters, priceRange: [0, 10000], page: 1 }
                        case "Material":
                            return {
                                ...prevFilters,
                                materials: prevFilters.materials.filter((m) => m !== value),
                                page: 1,
                            }
                        case "Gemstone":
                            return {
                                ...prevFilters,
                                gemstones: prevFilters.gemstones.filter((g) => g !== value),
                                page: 1,
                            }
                        default:
                            return prevFilters
                    }
                }
                case "SYNC_WITH_URL":
                    return action.payload
                default:
                    return prevFilters
            }
        })
    }, [])

    // Update URL when filters change
    useEffect(() => {
        const updateURL = () => {
            startTransition(() => {
                const params = new URLSearchParams()

                if (filters.category !== "all") params.set("category", filters.category)
                if (filters.priceRange[0] > 0) params.set("minPrice", filters.priceRange[0].toString())
                if (filters.priceRange[1] < 10000) params.set("maxPrice", filters.priceRange[1].toString())
                if (filters.materials.length > 0) params.set("materials", filters.materials.join(","))
                if (filters.gemstones.length > 0) params.set("gemstones", filters.gemstones.join(","))
                if (filters.search) params.set("search", filters.search)
                if (filters.sort !== "featured") params.set("sort", filters.sort)
                if (filters.page > 1) params.set("page", filters.page.toString())

                router.replace(`${pathname}?${params.toString()}`, { scroll: false })
            })
        }

        // Debounce URL updates to avoid too many history entries
        const debouncedUpdate = debounce(updateURL, 300)
        debouncedUpdate()

        return () => {
            debouncedUpdate.cancel()
        }
    }, [filters, pathname, router])

    // Sync with URL on popstate
    useEffect(() => {
        const handlePopState = () => {
            const newState: FilterState = {
                category: searchParams.get("category") || "all",
                priceRange: [Number(searchParams.get("minPrice")) || 0, Number(searchParams.get("maxPrice")) || 10000],
                materials: searchParams.get("materials")?.split(",").filter(Boolean) || [],
                gemstones: searchParams.get("gemstones")?.split(",").filter(Boolean) || [],
                search: searchParams.get("search") || "",
                sort: (searchParams.get("sort") as SortOption) || "featured",
                page: Number(searchParams.get("page")) || 1,
            }

            dispatch({ type: "SYNC_WITH_URL", payload: newState })
        }

        window.addEventListener("popstate", handlePopState)
        return () => window.removeEventListener("popstate", handlePopState)
    }, [searchParams, dispatch])

    // Format price for display
    const formatPrice = useCallback((price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price)
    }, [])

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = filters.category === "all" || product.category === filters.category
            const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
            const matchesMaterials =
                filters.materials.length === 0 || filters.materials.some((m) => product.materials.includes(m))
            const matchesGemstones =
                filters.gemstones.length === 0 || filters.gemstones.some((g) => product.gemstones.includes(g))
            const matchesSearch =
                !filters.search ||
                product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                product.description.toLowerCase().includes(filters.search.toLowerCase())

            return matchesCategory && matchesPrice && matchesMaterials && matchesGemstones && matchesSearch
        })
    }, [filters])

    // Sort products
    const sortedProducts = useMemo(() => {
        return [...filteredProducts].sort((a, b) => {
            switch (filters.sort) {
                case "newest":
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                case "price-asc":
                    return a.price - b.price
                case "price-desc":
                    return b.price - a.price
                case "best-selling":
                    return b.soldCount - a.soldCount
                default:
                    return a.featured === b.featured ? 0 : a.featured ? -1 : 1
            }
        })
    }, [filteredProducts, filters.sort])

    // Paginate products
    const paginatedProducts = useMemo(() => {
        const startIndex = (filters.page - 1) * itemsPerPage
        return sortedProducts.slice(startIndex, startIndex + itemsPerPage)
    }, [sortedProducts, filters.page, itemsPerPage])

    // Calculate total pages
    const totalPages = useMemo(
        () => Math.max(1, Math.ceil(sortedProducts.length / itemsPerPage)),
        [sortedProducts.length, itemsPerPage],
    )

    // Generate active filters for display
    const activeFilters = useMemo(() => {
        const result = []
        if (filters.category !== "all") result.push(`Category: ${filters.category}`)
        if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 10000) {
            result.push(`Price: ${formatPrice(filters.priceRange[0])} - ${formatPrice(filters.priceRange[1])}`)
        }
        filters.materials.forEach((m) => result.push(`Material: ${m}`))
        filters.gemstones.forEach((g) => result.push(`Gemstone: ${g}`))
        return result
    }, [filters.category, filters.priceRange, filters.materials, filters.gemstones, formatPrice])

    return {
        filters,
        dispatch,
        filteredProducts,
        sortedProducts,
        paginatedProducts,
        totalPages,
        activeFilters,
        formatPrice,
        isPending,
    }
}
