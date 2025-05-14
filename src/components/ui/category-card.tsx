"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "./card"

interface CategoryCardProps {
    title: string
    imageSrc: string
    href: string
}

export function CategoryCard({ title, imageSrc, href }: CategoryCardProps) {
    return (
        <Card
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
            <CardContent>
                <Link href={href} className="block h-full">
                    <div className="relative h-64 w-full ">
                        <Image
                            src={imageSrc || "/placeholder.svg"}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        <h3 className="text-xl font-semibold text-white capitalize">{title}</h3>
                    </div>
                </Link>
            </CardContent>
        </Card>
    )
}
