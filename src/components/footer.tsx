"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { format } from 'date-fns'
import {
    Facebook,
    Instagram,
    Twitter,
} from "lucide-react"
import { Link } from "@/i18n/navigation"


interface SocialIconProps {
    href: string
    icon: React.ReactNode
}

function SocialIcon({ href, icon }: SocialIconProps) {
    return (
        <motion.a
            href={href}
            className="flex items-center justify-center w-8 h-8 text-gray-800 transition-colors duration-300 border border-gray-300 rounded-full dark:text-gray-200 dark:border-gray-700 hover:bg-primary hover:border-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {icon}
        </motion.a>
    )
}

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "About", href: "/about" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Customer Support", href: "#" },
            { name: "Terms", href: "#" },
            { name: "FAQ", href: "#" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Products",
        links: [
            { name: "Rings", href: "#" },
            { name: "Earrings", href: "#" },
            { name: "Necklace", href: "#" },
            { name: "Male", href: "#" },
        ],
    },
    {
        title: "Extra Links",
        links: [
            { name: "Customer Support", href: "#" },
            { name: "Delivery Details", href: "#" },
            { name: "Terms & Conditions", href: "#" },
            { name: "Privacy Policy", href: "#" },
        ],
    },
]

const socialIcons = [
    { href: "#", icon: <Twitter className="w-4 h-4" /> },
    { href: "#", icon: <Facebook className="w-4 h-4" /> },
    { href: "#", icon: <Instagram className="w-4 h-4" /> },
]

export function Footer() {
    return (
        <footer className="py-10 bg-white dark:bg-gray-900 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-2 md:col-span-4 xl:pr-8"
                    >
                        <Image
                            src="/favicon.ico"
                            alt="Company Logo"
                            width={120}
                            height={36}
                            className="w-auto h-9"
                        />

                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mt-7">
                            branding here lorem ipsum sei que la sei que
                        </p>
                    </motion.div>

                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                            className="lg:col-span-2"
                        >
                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                {section.title}
                            </p>

                            <ul className="mt-6 space-y-5">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-800 transition-colors duration-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary focus:text-primary"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <hr className="mt-16 mb-10 border-gray-200 dark:border-gray-800" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © Copyright {format(new Date(), 'yyyy')}, All Rights Reserved by Metamorfosis
                    </p>

                    <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                        {socialIcons.map((social, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                            >
                                <SocialIcon href={social.href} icon={social.icon} />
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
