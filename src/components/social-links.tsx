import Link from "next/link"
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
    return (
        <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://instagram.com/joalheria" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://facebook.com/joalheria" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://twitter.com/joalheria" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link
                    href="https://linkedin.com/company/joalheria"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="h-4 w-4" />
                </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://youtube.com/joalheria" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="h-4 w-4" />
                </Link>
            </Button>
        </div>
    )
}
