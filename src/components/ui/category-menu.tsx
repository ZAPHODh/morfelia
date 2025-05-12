"use client"

import { CategoryCard } from "./category-card"

const categories = [
    {
        id: "brincos",
        title: "Brincos",
        imageSrc: "/placeholder.svg?height=400&width=300",
        href: "/categories/brincos",
    },
    {
        id: "colares",
        title: "Colares",
        imageSrc: "/placeholder.svg?height=400&width=300",
        href: "categories/colares",
    },
    {
        id: "aneis",
        title: "Anéis",
        imageSrc: "/placeholder.svg?height=400&width=300",
        href: "/categories/aneis",
    },
    {
        id: "pulseiras",
        title: "Pulseiras",
        imageSrc: "/placeholder.svg?height=400&width=300",
        href: "/categories/pulseiras",
    },
    {
        id: "masculino",
        title: "Masculino",
        imageSrc: "/placeholder.svg?height=400&width=300",
        href: "/categories/masculino",
    },
]

export function CategoryMenu() {


    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossas Categorias</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category.id} title={category.title} imageSrc={category.imageSrc} href={category.href} />
                ))}
            </div>
        </div>
    )
}
