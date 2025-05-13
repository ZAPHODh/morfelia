import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HistoryPage() {
    return (
        <main className="min-h-screen">
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary z-10"></div>
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Elegance Jewelry History"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl  mb-4">Our History</h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        A legacy of craftsmanship spanning four decades, from a small Italian atelier to a global luxury brand.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-3xl md:text-4xl  mb-4">Our Journey Through Time</h2>
                    <p className=" max-w-2xl mx-auto">
                        From humble beginnings to international recognition, explore the key moments that shaped Elegance Jewelry.
                    </p>
                </div>

                <div className="relative">

                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary hidden md:block"></div>
                    {[
                        {
                            year: "1985",
                            title: "The Beginning",
                            description:
                                "Antonio Bertelli opens his first atelier in Milan, crafting bespoke pieces for local clientele.",
                            image: "/placeholder.svg?height=600&width=800",
                            align: "left",
                        },
                        {
                            year: "1992",
                            title: "First Boutique",
                            description:
                                "The first Elegance Jewelry boutique opens on Via Montenapoleone, Milan's prestigious fashion district.",
                            image: "/placeholder.svg?height=600&width=800",
                            align: "right",
                        },
                        {
                            year: "1998",
                            title: "International Expansion",
                            description:
                                "Elegance opens its first international boutique in Paris, marking the beginning of global recognition.",
                            image: "/placeholder.svg?height=600&width=800",
                            align: "left",
                        },
                        {
                            year: "2005",
                            title: "The Celestial Collection",
                            description:
                                "Launch of the award-winning Celestial Collection, inspired by cosmic elements and celestial bodies.",
                            image: "/placeholder.svg?height=600&width=800",
                            align: "right",
                        },
                        {
                            year: "2010",
                            title: "New Generation",
                            description:
                                "Sofia Bertelli joins the company, bringing fresh perspectives while honoring her father's legacy.",
                            image: "/placeholder.svg?height=600&width=800",
                            align: "left",
                        },
                        {
                            year: "2018",
                            title: "Sustainable Initiative",
                            description:
                                "Elegance pioneers the industry's first fully traceable gemstone program, ensuring ethical sourcing.",
                            image: "/placeholder.svg?height=600&width=800",
                            align: "right",
                        },
                        {
                            year: "2023",
                            title: "Digital Transformation",
                            description:
                                "Launch of our immersive online boutique, bringing the Elegance experience to clients worldwide.",
                            image: "/placeholder.svg?height=600&width=800",
                            align: "left",
                        },
                    ].map((event, index) => (
                        <div key={index} className={`relative mb-16 md:mb-24 ${index === 6 ? "md:mb-0" : ""}`}>
                            <div
                                className={`flex flex-col md:flex-row ${event.align === "right" ? "md:flex-row-reverse" : ""
                                    } items-center`}
                            >
                                <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                                    <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                                        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="md:w-1/2 md:px-8">
                                    <div className=" bg-primary p-6 md:p-8 rounded-lg shadow-md relative">
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary  font-playfair text-xl py-2 px-4 rounded-full hidden md:block">
                                            {event.year}
                                        </div>
                                        <div className="md:hidden mb-2  font-playfair text-xl">{event.year}</div>
                                        <h3 className="font-playfair text-2xl  mb-3">{event.title}</h3>
                                        <p className="">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-playfair text-3xl md:text-4xl  mb-6">Preserving Our Legacy</h2>
                            <p className=" mb-4">
                                At Elegance Jewelry, we believe that true luxury is timeless. Our archives house every design ever
                                created, serving as both a testament to our heritage and inspiration for future collections.
                            </p>
                            <p className=" mb-4">
                                Our master craftsmen pass down techniques from generation to generation, ensuring that traditional
                                skills are preserved alongside modern innovation. This blend of old and new is what makes each Elegance
                                piece unique.
                            </p>
                            <p className=" mb-6">
                                Today, as we look to the future, we remain committed to the values that have guided us for decades:
                                exceptional craftsmanship, innovative design, and creating jewelry that tells a story.
                            </p>
                            <Link href="/responsibility">
                                <Button variant="outline" className="border-gold-500 hover:bg-gold-50">
                                    Our Commitment to Responsibility <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/placeholder.svg?height=1000&width=800"
                                alt="Elegance Jewelry Archives"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 bg-secondary ">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl mb-6">Be Part of Our Story</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Visit our boutiques to experience our heritage firsthand and discover how we can help you create your own
                        legacy.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/shop">
                            <Button >Explore Collections</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline">
                                Find a Boutique
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
