"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { StarRatingInput } from "./star-rating-input"
import { Textarea } from "./ui/textarea"

interface ReviewFormProps {
    productId: string
}

export function ReviewForm({ productId }: ReviewFormProps) {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (rating === 0) {
            toast("Rating required", {
                description: "Please select a star rating before submitting",
            })
            return
        }
        if (!comment.trim()) {
            toast("Review required", {
                description: "Please write a review before submitting",
            })
            return
        }
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId,
                    stars: rating,
                    content: comment,
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to submit review")
            }
            setRating(0)
            setComment("")

            toast(
                "Review submitted", {
                description: "Thank you for your feedback!",
            })
        } catch (error) {
            toast("Error", {
                description: "There was a problem submitting your review. Please try again.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full md:max-w-1/2">
            <CardHeader>
                <CardTitle>Write a Review</CardTitle>
                <CardDescription>Share your experience with this product</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Your Rating</label>
                        <StarRatingInput onChange={setRating} initialRating={rating} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="comment" className="text-sm font-medium">
                            Your Review
                        </label>
                        <Textarea
                            id="comment"
                            placeholder="What did you like or dislike about this product?"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows={4}
                        />
                    </div>
                    <CardFooter>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Review"}
                        </Button>
                    </CardFooter>
                </CardContent>
            </form>
        </Card>
    )
}
