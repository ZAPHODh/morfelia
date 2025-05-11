"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SizeSelectorProps {
    sizes: string[]
    onChange?: (size: string) => void
}

export function SizeSelector({ sizes, onChange }: SizeSelectorProps) {
    const [selectedSize, setSelectedSize] = useState<string | null>(sizes[0] || null)

    const handleSizeChange = (size: string) => {
        setSelectedSize(size)
        if (onChange) {
            onChange(size)
        }
    }

    if (!sizes || sizes.length === 0) {
        return null
    }

    return (
        <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
                <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeChange(size)}
                    className={cn(
                        "h-10 min-w-10 px-3 rounded-md border text-sm font-medium transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                        selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    )}
                    aria-pressed={selectedSize === size}
                >
                    <span className="flex items-center justify-center">
                        {size}
                        {selectedSize === size && <Check className="ml-1 h-4 w-4" />}
                    </span>
                </button>
            ))}
        </div>
    )
}
