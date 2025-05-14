"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {

    const getPageNumbers = () => {
        const pageNumbers = []
        pageNumbers.push(1)
        const startPage = Math.max(2, currentPage - 1)
        const endPage = Math.min(totalPages - 1, currentPage + 1)
        if (startPage > 2) {
            pageNumbers.push("...")
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i)
        }
        if (endPage < totalPages - 1) {
            pageNumbers.push("...")
        }
        if (totalPages > 1) {
            pageNumbers.push(totalPages)
        }

        return pageNumbers
    }

    const handlePageChange = (page: number) => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        onPageChange(page)
    }
    if (totalPages <= 1) return null

    return (
        <div className="flex items-center justify-center gap-1">
            <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {getPageNumbers().map((page, index) =>
                page === "..." ? (
                    <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-muted-foreground">
                        ...
                    </span>
                ) : (
                    <Button
                        key={`page-${page}`}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page as number)}
                        className={currentPage === page ? "bg-gold-600 hover:bg-gold-700" : ""}
                    >
                        {page}
                    </Button>
                ),
            )}

            <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
