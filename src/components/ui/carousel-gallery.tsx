"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export type GalleryItem = {
    id: string
    type: "image" | "video"
    src: string
    alt: string
    width: number
    height: number
    href?: string
    title?: string
    description?: string
}

type CarouselGalleryProps = {
    autoPlay?: boolean
    autoPlayInterval?: number
    showThumbnails?: boolean
    showControls?: boolean
    showIndicators?: boolean
    items: GalleryItem[]
    className?: string
}

export default function CarouselGallery({
    autoPlay = true,
    autoPlayInterval = 5000,
    showThumbnails = true,
    showControls = true,
    showIndicators = true,
    items,
    className,
}: CarouselGalleryProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isPaused, setIsPaused] = React.useState(false)
    const [isHovering, setIsHovering] = React.useState(false)
    const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([])

    const prevSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    }, [items.length])

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    }, [items.length])

    // Pause/play video when changing slides
    React.useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentIndex) {
                    video.currentTime = 0
                    video.play().catch(() => {
                        // Autoplay might be blocked by browser
                        console.log("Video autoplay prevented by browser")
                    })
                } else {
                    video.pause()
                }
            }
        })
    }, [currentIndex])

    // Auto play functionality
    React.useEffect(() => {
        if (!autoPlay || isPaused) return

        const interval = setInterval(() => {
            nextSlide()
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [currentIndex, autoPlay, autoPlayInterval, nextSlide, isPaused])

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                nextSlide()
            } else if (e.key === "ArrowLeft") {
                prevSlide()
            } else if (e.key === " ") {
                // Space bar toggles pause
                setIsPaused((prev) => !prev)
                e.preventDefault()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [nextSlide, prevSlide])

    // Render item based on type (image or video)
    const renderItem = (item: GalleryItem, index: number) => {
        const content =
            item.type === "video" ? (
                <video
                    ref={(el) => { videoRefs.current[index] = el }}
                    src={item.src}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    loop
                    aria-label={item.alt}
                />
            ) : (
                <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                />
            )

        if (item.href) {
            return (
                <Link href={item.href} className="block h-full w-full cursor-pointer">
                    {content}
                </Link>
            )
        }

        return content
    }

    return (
        <div className={cn("relative w-full", className)}>
            <div
                className="relative overflow-hidden bg-black"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="relative aspect-[16/9] w-full overflow-hidden max-h-[70vh]">
                    {items.map((item, index) => (
                        <div
                            key={`slide-${item.id || index}`}
                            className={cn(
                                "absolute inset-0 h-full w-full transform transition-all duration-500 ease-in-out",
                                index === currentIndex
                                    ? "translate-x-0 opacity-100"
                                    : index < currentIndex
                                        ? "-translate-x-full opacity-0"
                                        : "translate-x-full opacity-0",
                            )}
                            aria-hidden={index !== currentIndex}
                        >
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>

                {/* Caption */}
                {(items[currentIndex].title || items[currentIndex].description) && (
                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        {items[currentIndex].title && <h3 className="text-xl font-bold mb-1">{items[currentIndex].title}</h3>}
                        {items[currentIndex].description && (
                            <p className="text-sm text-white/90">{items[currentIndex].description}</p>
                        )}
                    </div>
                )}

                {/* Navigation controls */}
                {showControls && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 transition-opacity",
                                isHovering ? "opacity-100" : "opacity-0 md:opacity-60",
                            )}
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 transition-opacity",
                                isHovering ? "opacity-100" : "opacity-0 md:opacity-60",
                            )}
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "absolute right-2 bottom-2 h-8 w-8 rounded-full bg-black/30 text-white hover:bg-black/50 transition-opacity",
                                isHovering ? "opacity-100" : "opacity-0",
                            )}
                            onClick={() => setIsPaused(!isPaused)}
                            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                        >
                            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                        </Button>
                    </>
                )}

                {/* Indicators */}
                {showIndicators && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {items.map((_, index) => (
                            <button
                                key={`indicator-${index}`}
                                className={cn(
                                    "h-2 w-2 rounded-full transition-all",
                                    index === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80",
                                )}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentIndex ? "true" : "false"}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Thumbnails */}
            {showThumbnails && items.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto px-2 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {items.map((item, index) => (
                        <button
                            key={`thumb-${item.id || index}`}
                            className={cn(
                                "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded transition-all duration-200",
                                index === currentIndex ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100",
                            )}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === currentIndex ? "true" : "false"}
                        >
                            {item.type === "video" ? (
                                <div className="relative h-full w-full">
                                    <Image
                                        src={item.src.replace(/\.(mp4|webm)$/, ".jpg") || item.src}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <Play className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            ) : (
                                <Image
                                    src={item.src || "/placeholder.svg"}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
