import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Diamond, Heart, Shield } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen mx-auto">
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary z-10"></div>
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Elegance Jewelry Craftsmanship"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-4">About Elegance Jewelry</h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                        Crafting timeless elegance since 1985, with a passion for perfection and an eye for detail.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-playfair text-3xl md:text-4xl mb-6">Our Story</h2>
                        <p className="text-gray-700 mb-4">
                            Founded in 1985 by master jeweler Antonio Bertelli, Elegance Jewelry began as a small atelier in Milan,
                            Italy. What started as a passion project quickly gained recognition for its exceptional craftsmanship and
                            innovative designs.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Today, Elegance Jewelry stands as a symbol of luxury and sophistication, with boutiques in major cities
                            around the world. Our commitment to quality and artistry remains unchanged, as we continue to create
                            pieces that celebrate life&apos;s most precious moments.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Each Elegance creation tells a story—a story of tradition, innovation, and timeless beauty that transcends
                            generations.
                        </p>
                        <Link href="/our-history">
                            <Button variant="outline" className="border-gold-500  hover:bg-gold-50">
                                Explore Our History <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/placeholder.svg?height=1000&width=800"
                            alt="Elegance Jewelry Founder"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 bg">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-3xl md:text-4xl mb-4">Our Values</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            At Elegance Jewelry, our values guide everything we do, from sourcing the finest materials to crafting
                            each piece with meticulous attention to detail.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-primary p-8 rounded-lg shadow-md text-center">
                            <div className="h-12 w-12 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Diamond className="h-6 w-6 " />
                            </div>
                            <h3 className="font-playfair text-xl mb-3">Excellence</h3>
                            <p>
                                We pursue perfection in every detail, from design to final polish, ensuring each piece meets our
                                exacting standards.
                            </p>
                        </div>

                        <div className="bg-primary p-8 rounded-lg shadow-md text-center">
                            <div className="h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="h-6 w-6 " />
                            </div>
                            <h3 className="font-playfair text-xl mb-3">Passion</h3>
                            <p>
                                Our love for jewelry making drives us to create pieces that inspire emotion and celebrate life&apos;s special
                                moments.
                            </p>
                        </div>

                        <div className="bg-primary p-8 rounded-lg shadow-md text-center">
                            <div className="h-12 w-12 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="h-6 w-6 " />
                            </div>
                            <h3 className="font-playfair text-xl mb-3">Heritage</h3>
                            <p>
                                We honor traditional craftsmanship while embracing innovation, creating jewelry that stands the test of
                                time.
                            </p>
                        </div>

                        <div className="bg-primary p-8 rounded-lg shadow-md text-center">
                            <div className="h-12 w-12 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="h-6 w-6 " />
                            </div>
                            <h3 className="font-playfair text-xl mb-3">Integrity</h3>
                            <p>
                                We source materials ethically and maintain transparency in our practices, building trust with our
                                clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-3xl md:text-4xl mb-4">Meet Our Team</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Behind every Elegance creation is a team of passionate artisans, designers, and experts dedicated to
                        bringing beauty to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sofia Bertelli",
                            role: "Creative Director",
                            image: "/placeholder.svg?height=600&width=600",
                            bio: "Daughter of founder Antonio Bertelli, Sofia brings a modern vision while honoring the brand's heritage.",
                        },
                        {
                            name: "Marco Rossi",
                            role: "Master Jeweler",
                            image: "/placeholder.svg?height=600&width=600",
                            bio: "With over 30 years of experience, Marco oversees our atelier and trains the next generation of craftsmen.",
                        },
                        {
                            name: "Isabelle Chen",
                            role: "Head of Design",
                            image: "/placeholder.svg?height=600&width=600",
                            bio: "Award-winning designer whose creations blend contemporary aesthetics with timeless elegance.",
                        },
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative h-80">
                                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-playfair text-xl mb-1">{member.name}</h3>
                                <p className=" mb-3">{member.role}</p>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl mb-6">Experience the Elegance Difference</h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Visit one of our boutiques or schedule a private consultation to discover our collections and create your
                        own legacy.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/shop">
                            <Button variant={'ghost'}>Explore Collections</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
