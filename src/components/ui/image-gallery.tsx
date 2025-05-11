"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

interface GalleryImage {
    src: string
    alt: string
    width?: number
    height?: number
}

interface ImageGalleryProps {
    images: GalleryImage[]
    productName: string
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [zoomDialogOpen, setZoomDialogOpen] = useState(false)

    // Handle empty images array
    if (!images || images.length === 0) {
        return (
            <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image src="/placeholder.svg?height=600&width=600" alt={productName} fill className="object-cover" priority />
            </div>
        )
    }

    const currentImage = images[currentImageIndex]

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <Card className="overflow-hidden border-none">
            <CardContent className="p-4 space-y-4">
                {/* Main Image with Navigation */}
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                    <Image
                        src={currentImage.src || "/placeholder.svg?height=600&width=600"}
                        alt={currentImage.alt || productName}
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={goToPrevious}
                            >
                                <ChevronLeft className="h-6 w-6" />
                                <span className="sr-only">Previous image</span>
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={goToNext}
                            >
                                <ChevronRight className="h-6 w-6" />
                                <span className="sr-only">Next image</span>
                            </Button>
                        </>
                    )}

                    {/* Zoom Button */}
                    <Dialog open={zoomDialogOpen} onOpenChange={setZoomDialogOpen}>
                        <DialogTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <ZoomIn className="h-4 w-4" />
                                <span className="sr-only">Zoom image</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                            <div className="w-full h-full">
                                <Image
                                    src={currentImage.src || "/placeholder.svg?height=800&width=1200"}
                                    alt={currentImage.alt || productName}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                    <div className="grid grid-cols-5 gap-2">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "relative aspect-square overflow-hidden rounded-md border cursor-pointer hover:opacity-80 transition-opacity",
                                    currentImageIndex === index && "ring-2 ring-primary",
                                )}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt || `Product image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
