"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface StarRatingInputProps {
    initialRating?: number
    onChange?: (rating: number) => void
}

export function StarRatingInput({ initialRating = 0, onChange }: StarRatingInputProps) {
    const [rating, setRating] = useState(initialRating)
    const [hoverRating, setHoverRating] = useState(0)

    const handleSetRating = (newRating: number) => {
        setRating(newRating)
        if (onChange) {
            onChange(newRating)
        }
    }

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={() => handleSetRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} out of 5 stars`}
                >
                    <Star
                        className={`h-6 w-6 transition-colors ${(hoverRating ? hoverRating >= star : rating >= star)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                    />
                </button>
            ))}
        </div>
    )
}
