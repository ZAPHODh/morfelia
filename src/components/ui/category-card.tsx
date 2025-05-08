"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
    title: string
    imageSrc: string
    href: string
}

export function CategoryCard({ title, imageSrc, href }: CategoryCardProps) {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Link href={href} className="block h-full">
                <div className="relative h-64 w-full">
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <motion.div
                        className="absolute inset-0 bg-black/30"
                        whileHover={{ opacity: 0.2 }}
                        initial={{ opacity: 0.3 }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-xl font-semibold text-white capitalize">{title}</h3>
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    )
}
