"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { format } from "date-fns"
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    CreditCard,
    Shield,
    Award,
    ChevronRight,
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SocialIconProps {
    href: string
    icon: React.ReactNode
    label: string
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
    return (
        <motion.a
            href={href}
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 transition-colors duration-300 border border-gray-300 rounded-full dark:text-gray-300 dark:border-gray-700 hover:bg-primary hover:border-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {icon}
        </motion.a>
    )
}

const footerLinks = [
    {
        title: "Empresa",
        links: [
            { name: "Sobre Nós", href: "/about" },
            { name: "Nossa História", href: "/our-history" },
            { name: "Responsabilidade Social", href: "/responsibility" },
        ],
    },
    {
        title: "Atendimento",
        links: [
            { name: "Fale Conosco", href: "/contact" },
            { name: "Perguntas Frequentes", href: "/faq" },
        ],
    },
    {
        title: "Produtos",
        links: [
            { name: "Categorias", href: "/category" },
            { name: "Recentes", href: "/category" },
            { name: "Sazonal", href: "/categoria/sazonal" },
        ],
    },
    {
        title: "Políticas",
        links: [
            { name: "Todas as políticas", href: "/terms" },
            { name: "Privacidade", href: "/terms/privacy" },
            { name: "Termos e Condições", href: "/terms/term" },
        ],
    },
]

const socialIcons = [
    { href: "https://instagram.com/joalheria", icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { href: "https://facebook.com/joalheria", icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { href: "https://twitter.com/joalheria", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { href: "https://youtube.com/joalheria", icon: <Youtube className="w-5 h-5" />, label: "Youtube" },
    { href: "https://linkedin.com/company/joalheria", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
]

const paymentMethods = [
    { name: "Visa", image: "/images/payment/visa.png" },
    { name: "Mastercard", image: "/images/payment/mastercard.png" },
    { name: "American Express", image: "/images/payment/amex.png" },
    { name: "PayPal", image: "/images/payment/paypal.png" },
    { name: "Pix", image: "/images/payment/pix.png" },
]

export function Footer() {
    const [email, setEmail] = React.useState("")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Subscribing email:", email)
        setEmail("")

    }

    return (
        <footer className="pt-16 pb-8">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex items-start"
                    >
                        <div className="flex-shrink-0">
                            <Shield className="w-10 h-10 text-primary" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-base font-medium">Compra Segura</h3>
                            <p className="mt-1 text-sm">
                                Todas as transações são processadas com segurança e seus dados são protegidos.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-start"
                    >
                        <div className="flex-shrink-0">
                            <Award className="w-10 h-10 text-primary" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-base font-medium">Garantia de Qualidade</h3>
                            <p className="mt-1 text-sm">
                                Todas as nossas joias passam por rigorosos controles de qualidade e possuem certificado de
                                autenticidade.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-start"
                    >
                        <div className="flex-shrink-0">
                            <CreditCard className="w-10 h-10 text-primary" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-base font-medium">Múltiplas Formas de Pagamento</h3>
                            <p className="mt-1 text-sm">
                                Aceitamos diversas formas de pagamento para sua conveniência.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 mb-16 border-b pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 xl:col-span-4"
                    >
                        <Link href="/" className="inline-block">
                            <Image src="/favicon.ico" alt="Joalheria Logo" width={150} height={45} className="w-auto h-12" />
                        </Link>

                        <p className="text-base mt-6 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3" />
                                <p className="text-sm">
                                    Av. Paulista, 1000, Bela Vista
                                    <br />
                                    São Paulo - SP, 01310-100
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-primary mr-3" />
                                <p className="text-sm">(11) 1234-5678</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-primary mr-3" />
                                <p className="text-sm">contato@joalheria.com.br</p>
                            </div>
                        </div>

                        <div className="mt-8 hidden md:block">
                            <h3 className="text-sm font-semibold">Siga-nos</h3>
                            <div className="flex items-center mt-4 space-x-3">
                                {socialIcons.map((social, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                    >
                                        <SocialIcon href={social.href} icon={social.icon} label={social.label} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-7 xl:col-span-5 xl:col-start-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {footerLinks.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                >
                                    <h3 className="text-sm font-semibold">{section.title}</h3>

                                    <ul className="mt-4 space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-sm transition-colors duration-300 hover:text-primary dark:hover:text-primary flex items-center"
                                                >
                                                    <ChevronRight className="w-3 h-3 mr-1" />
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lg:col-span-12 xl:col-span-3"
                    >
                        <h3 className="text-sm font-semibold">Receba nossas novidades</h3>
                        <p className="mt-4 text-sm">
                            Cadastre-se para receber ofertas exclusivas, lançamentos e dicas de cuidados com suas joias.
                        </p>
                        <form onSubmit={handleSubscribe} className="mt-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-grow"
                                />
                                <Button type="submit" className="whitespace-nowrap">
                                    Inscrever-se
                                </Button>
                            </div>
                            <p className="mt-2 text-xs">
                                Ao se inscrever, você concorda com nossa{" "}
                                <Link href="/politicas/privacidade" className="underline hover:text-primary">
                                    Política de Privacidade
                                </Link>
                            </p>
                        </form>
                    </motion.div>
                    <div className="mt-4 block md:hidden">
                        <h3 className="text-sm font-semibold">Siga-nos</h3>
                        <div className="flex items-center mt-4 space-x-3">
                            {socialIcons.map((social, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                >
                                    <SocialIcon href={social.href} icon={social.icon} label={social.label} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:items-center sm:justify-between">

                    <div className="flex flex-col sm:flex-row items-center">
                        <p className="text-sm">
                            © Copyright {format(new Date(), "yyyy")}, Todos os direitos reservados por Metamorfosis
                        </p>
                        <span className="hidden sm:inline mx-2">|</span>
                        <p className="text-sm mt-1 sm:mt-0">
                            Desenvolvido por{" "}
                            <a href="#" className="hover:text-primary">
                                zaphodh
                            </a>
                        </p>
                    </div>

                    <div className="mt-6 sm:mt-0">
                        <p className="text-sm mb-2 text-center sm:text-right">
                            Formas de pagamento aceitas:
                        </p>
                        <div className="flex items-center justify-center sm:justify-end space-x-3">
                            {paymentMethods.map((method, index) => (
                                <motion.div
                                    key={method.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
                                    className="w-10 h-6 bg-white rounded border flex items-center justify-center"
                                >
                                    <Image
                                        src={method.image || "/placeholder.svg"}
                                        alt={method.name}
                                        width={24}
                                        height={16}
                                        className="max-h-4 w-auto"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
