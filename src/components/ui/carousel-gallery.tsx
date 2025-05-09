"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";


type CarouselGalleryProps = {
    autoPlay: boolean,
    autoPlayInterval: number,
    showThumbnails: boolean
    images: GalleryImage[]
}


export default function CarouselGallery({ autoPlay = true, autoPlayInterval = 5000, showThumbnails = true, images }: CarouselGalleryProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


    React.useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, autoPlay, autoPlayInterval]);

    // Keyboard navigation for main carousel
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="w-screen md:p-6">
            <div className="relative w-screen bg-black overflow-hidden">
                <div className="relative aspect-video w-screen overflow-hidden max-h-[60vh]" >
                    {images.map((image, index) => (
                        <div
                            key={`slide-${index}`}
                            className={cn(
                                "w-screen absolute inset-0 transform transition-all duration-500 ease-in-out",
                                index === currentIndex
                                    ? "translate-x-0 opacity-100"
                                    : index < currentIndex
                                        ? "-translate-x-full opacity-0"
                                        : "translate-x-full opacity-0",
                            )}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="h-screen w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
                    {images[currentIndex].alt}
                </div>
            </div>

            {showThumbnails && (
                <div className="mt-4 flex gap-2 overflow-x-auto px-2 py-2">
                    {images.map((image, index) => (
                        <button
                            key={`thumb-${index}`}
                            className={cn(
                                "relative h-20 w-20 flex-shrink-0 transition-all duration-200",
                                index === currentIndex
                                    ? "ring-primary ring-2 ring-offset-2"
                                    : "opacity-70 hover:opacity-100",
                            )}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <Image
                                src={image.src}
                                alt={`Thumbnail ${index + 1}`}
                                width={80}
                                height={80}
                                className="h-full w-full rounded-sm object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
