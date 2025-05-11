'use client'

import { useState, useEffect } from "react"
import { Facebook, Twitter, Share2, Copy, Check, PinIcon as Pinterest } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ShareButtonsProps {
    url: string
    title: string
    description?: string
    image?: string
}

export function ShareButtons({ url, title, description, image }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [fullUrl, setFullUrl] = useState(url)
    const [canShare, setCanShare] = useState(false)

    // Wait for component to mount before accessing browser APIs
    useEffect(() => {
        setIsMounted(true)
        setFullUrl(url.startsWith("http") ? url : `${window.location.origin}${url}`)
        setCanShare(typeof navigator.share === "function")
    }, [url])

    const shareData = {
        title,
        text: description || title,
        url: fullUrl,
    }

    const handleCopyLink = async () => {
        if (!isMounted) return

        try {
            await navigator.clipboard.writeText(fullUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy: ", err)
        }
    }

    const handleShare = async () => {
        if (!isMounted) return

        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch (err) {
                console.error("Error sharing: ", err)
            }
        }
    }

    // Generate share URLs only after component is mounted
    const facebookShareUrl = isMounted ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}` : '#'
    const twitterShareUrl = isMounted ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}` : '#'
    const pinterestShareUrl = isMounted ? `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(fullUrl)}&description=${encodeURIComponent(title)}&media=${encodeURIComponent(image || "")}` : '#'
    const whatsappShareUrl = isMounted ? `https://wa.me/?text=${encodeURIComponent(`${title} ${fullUrl}`)}` : '#'

    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground mr-1">Share:</span>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => isMounted && window.open(facebookShareUrl, "_blank")}
                        >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Share on Facebook</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Share on Facebook</p>
                    </TooltipContent>
                </Tooltip>
                {/* Other social buttons remain the same */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => isMounted && window.open(twitterShareUrl, "_blank")}
                        >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Share on Twitter</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Share on Twitter</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => isMounted && window.open(pinterestShareUrl, "_blank")}
                        >
                            <Pinterest className="h-4 w-4" />
                            <span className="sr-only">Share on Pinterest</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Share on Pinterest</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={handleCopyLink}>
                            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            <span className="sr-only">Copy link</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{copied ? "Copied!" : "Copy link"}</p>
                    </TooltipContent>
                </Tooltip>
                {canShare && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={handleShare}>
                                <Share2 className="h-4 w-4" />
                                <span className="sr-only">Share</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Share</p>
                        </TooltipContent>
                    </Tooltip>
                )}
            </TooltipProvider>
        </div>
    )
}