"use client"

import { CategoryCard } from "./category-card"

const categories = [
    {
        id: "brincos",
        title: "Brincos",
        imageSrc: "https://images.unsplash.com/photo-1701777892770-df3bf8006fd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/categories/brincos",
    },
    {
        id: "colares",
        title: "Colares",
        imageSrc: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "categories/colares",
    },
    {
        id: "aneis",
        title: "Anéis",
        imageSrc: "https://images.unsplash.com/photo-1550368566-f9cc32d7392d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/categories/aneis",
    },
    {
        id: "pulseiras",
        title: "Pulseiras",
        imageSrc: "https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/categories/pulseiras",
    },
    {
        id: "masculino",
        title: "Masculino",
        imageSrc: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/categories/masculino",
    },
]

export function CategoryMenu() {


    return (
        <div className="mx-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossas Categorias</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category.id} title={category.title} imageSrc={category.imageSrc} href={category.href} />
                ))}
            </div>
        </div>
    )
}
