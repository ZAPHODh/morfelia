
import { Link } from "@/i18n/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
            <Link href="/" className="flex items-center hover:text-foreground transition-colors">
                <Home className="h-4 w-4 mr-1" />
                <span className="sr-only sm:not-sr-only">Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={item.href} className="flex items-center">
                    <ChevronRight className="h-4 w-4 mx-1" />
                    {index === items.length - 1 ? (
                        <span className="font-medium text-foreground capitalize" aria-current="page">
                            {item.label}
                        </span>
                    ) : (
                        <Link href={item.href} className="hover:text-foreground transition-colors capitalize">
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    )
}
