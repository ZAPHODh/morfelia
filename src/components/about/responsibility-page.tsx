import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Leaf, Recycle, Users, Heart } from "lucide-react"

export default function ResponsibilityPage() {
    return (
        <main className="min-h-screen">
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary z-10"></div>
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Elegance Jewelry Responsibility"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our Responsibility</h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                        Committed to ethical practices, sustainability, and making a positive impact on our world.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="font-playfair text-3xl md:text-4xl  mb-6">Ethical Sourcing</h2>
                        <p className=" mb-4">
                            At Elegance Jewelry, we believe that beautiful jewelry should have an equally beautiful origin story.
                            That&apos;s why we&apos;ve pioneered industry-leading standards for responsible sourcing.
                        </p>
                        <p className=" mb-4">
                            Our Traceable Gemstone Program ensures that every gemstone in our collections can be traced back to its
                            source, guaranteeing that it was mined with respect for human rights and the environment.
                        </p>
                        <p className=" mb-6">
                            We work exclusively with suppliers who share our values and meet our rigorous standards for ethical
                            practices, fair labor, and environmental stewardship.
                        </p>
                        <div className="space-y-3">
                            {[
                                "100% conflict-free diamonds and gemstones",
                                "Full traceability from mine to market",
                                "Regular audits of our supply chain",
                                "Compliance with Kimberley Process and beyond",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <Check className="h-5 w-5  mr-2 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/placeholder.svg?height=1000&width=800"
                            alt="Ethical Gemstone Mining"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-3xl md:text-4xl mb-4">Our Sustainability Commitment</h2>
                        <p className=" max-w-2xl mx-auto">
                            We&apos;re dedicated to reducing our environmental footprint and promoting sustainable practices throughout our
                            operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className=" p-8 rounded-lg shadow-md">
                            <div className="h-12 w-12  rounded-full flex items-center justify-center mb-6">
                                <Recycle className="h-6 w-6" />
                            </div>
                            <h3 className="font-playfair text-xl  mb-3">Recycled Materials</h3>
                            <p className=" mb-4">
                                We use recycled gold and platinum in our jewelry whenever possible, reducing the need for new mining and
                                minimizing environmental impact.
                            </p>
                            <p className="">
                                Our goal is to reach 95% recycled precious metals across all collections by 2025.
                            </p>
                        </div>

                        <div className=" p-8 rounded-lg shadow-md">
                            <div className="h-12 w-12  rounded-full flex items-center justify-center mb-6">
                                <Leaf className="h-6 w-6" />
                            </div>
                            <h3 className="font-playfair text-xl  mb-3">Carbon Neutral</h3>
                            <p className=" mb-4">
                                We&apos;ve committed to becoming carbon neutral by 2030, with comprehensive plans to reduce emissions across
                                our supply chain, manufacturing, and retail operations.
                            </p>
                            <p className="">
                                We offset our current carbon footprint through investments in verified environmental projects.
                            </p>
                        </div>

                        <div className=" p-8 rounded-lg shadow-md">
                            <div className="h-12 w-12  rounded-full flex items-center justify-center mb-6">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="font-playfair text-xl  mb-3">Sustainable Packaging</h3>
                            <p className=" mb-4">
                                Our packaging is crafted from FSC-certified materials and designed to be both beautiful and
                                environmentally responsible.
                            </p>
                            <p className="">
                                We&apos;ve eliminated single-use plastics from our packaging and retail operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <Image src="/placeholder.svg?height=1000&width=800" alt="Community Impact" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="font-playfair text-3xl md:text-4xl  mb-6">Community Impact</h2>
                        <p className=" mb-4">
                            We believe in giving back to the communities that make our work possible. Through the Elegance Foundation,
                            we support initiatives focused on education, healthcare, and economic development in mining communities.
                        </p>
                        <p className=" mb-4">
                            Our Artisan Training Program provides skills development and employment opportunities for aspiring
                            jewelers from underserved communities, preserving traditional craftsmanship while creating sustainable
                            livelihoods.
                        </p>
                        <p className=" mb-6">
                            Each year, we dedicate 3% of our profits to community development projects in regions where our materials
                            are sourced.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Scholarships for 200+ students annually",
                                "Healthcare initiatives in mining communities",
                                "Clean water projects in 12 communities",
                                "Artisan training and employment programs",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <Heart className="h-5 w-5  mr-2 mt-0.5" />
                                    <span className="">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-3xl md:text-4xl  mb-4">Our Certifications & Partnerships</h2>
                        <p className=" max-w-2xl mx-auto">
                            We&apos;re proud to work with leading organizations that share our commitment to ethical and sustainable
                            practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((cert) => (
                            <div key={cert} className=" p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                <div className="h-24 w-24 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                                    <Image
                                        src={`/placeholder.svg?height=100&width=100`}
                                        alt={`Certification ${cert}`}
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <h3 className="font-playfair text-lg  mb-2">
                                    {
                                        ["Responsible Jewelry Council", "Fairmined Certified", "Kimberley Process", "UN Global Compact"][
                                        cert - 1
                                        ]
                                    }
                                </h3>
                                <p className=" text-sm">
                                    {["Member since 2010", "Gold Partner", "Founding Member", "Signatory since 2015"][cert - 1]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-playfair text-3xl md:text-4xl mb-6">Join Us in Making a Difference</h2>
                    <p className=" max-w-2xl mx-auto mb-8">
                        When you choose Elegance Jewelry, you&apos;re not just purchasing a beautiful piece—you&apos;re supporting ethical
                        practices and positive change in the jewelry industry.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/shop">
                            <Button>Shop Responsibly</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
