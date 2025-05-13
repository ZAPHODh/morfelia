'use client';

// Importações de bibliotecas e componentes
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const imageVariants = {
    rest: {
        scale: 1,
        opacity: 1,
        filter: "grayscale(0%)"
    },
    hover: {
        scale: 1.05,
        opacity: 1,
        filter: "grayscale(0%)"
    }
};

export function Card(props: { product: Product }) {
    const locale = useLocale();
    const { push } = useRouter();
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { addToCart } = useCart();
    const isMobile = useIsMobile();

    const containerVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.02 }
    };


    const overlayVariants = {
        rest: {
            background: isMobile
                ? 'linear-gradient(0deg, var(--color-primary-800) 15%, transparent 70%)'
                : 'linear-gradient(0deg, var(--color-primary-800) 0%, transparent 70%)'
        },
        hover: {
            background: 'linear-gradient(0deg, var(--color-primary-900) 20%, var(--color-primary-300) 90%)'
        }
    };


    const textVariants = {
        rest: { y: isMobile ? 0 : 110 },
        hover: { y: 0 }
    };

    const contentVariants = {
        rest: {
            opacity: isMobile ? 1 : 0,
            y: isMobile ? 0 : 50
        },
        hover: {
            opacity: 1,
            y: 0
        }
    };

    const shadowVariants = {
        rest: {
            boxShadow: isMobile
                ? '0 0 12px 1px rgba(34, 197, 94, 0.15)'
                : '0 0 0 0 rgba(34, 197, 94, 0)'
        },
        hover: {
            boxShadow: '0 0 12px 1px rgba(34, 197, 94, 0.15)'
        }
    };

    return (
        <motion.div
            className="group relative h-96 w-72 overflow-hidden shadow-2xl ml-[20px]"
            whileHover={isMobile ? undefined : "hover"}
            initial="rest"
            animate={isMobile ? "hover" : "rest"}
            variants={containerVariants}
        >
            <motion.div
                className="absolute top-4 right-4 z-20"
                variants={{
                    rest: {
                        scale: isMobile ? 1 : 0.8,
                        opacity: isMobile ? 1 : 0
                    },
                    hover: { scale: 1, opacity: 1 }
                }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full text-primary hover:bg-white hover:text-primary"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                >
                    <Heart
                        className="h-4 w-4"
                        fill={isWishlisted ? 'currentColor' : 'none'}
                        stroke={isWishlisted ? 'currentColor' : 'oklch(0.4441 0.0559 70.11)'}
                    />
                </Button>
            </motion.div>
            <motion.div
                className="absolute h-full"
                variants={imageVariants}
                transition={{ duration: isMobile ? 0 : 0.4 }}
            >
                <Image
                    width={props.product.images[0].width}
                    height={props.product.images[0].height}
                    src={props.product.images[0].src}
                    alt={props.product.images[0].alt}
                    className="h-full w-full object-cover"
                    priority={isMobile}
                />
            </motion.div>
            <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 overflow-hidden"
                variants={overlayVariants}
                transition={{ duration: isMobile ? 0 : 0.4 }}
            >
                <motion.div
                    variants={textVariants}
                    transition={{ delay: isMobile ? 0 : 0.2 }}
                >
                    <h3 className="mb-2 text-2xl font-bold text-white">
                        {props.product.name[locale]}
                    </h3>
                </motion.div>

                <motion.div
                    variants={contentVariants}
                    transition={{ delay: isMobile ? 0 : 0.2 }}
                >
                    <p className="mb-4 text-neutral-300">{props.product.shortDescription}</p>
                    <p className="text-2xl font-bold text-white">
                        {props.product.price[locale].value}
                    </p>
                    <div className="flex flex-shrink gap-1 py-2">
                        <Badge>{props.product.category}</Badge>
                    </div>
                    <motion.div
                        variants={{
                            rest: { scale: isMobile ? 1 : 0.8 },
                            hover: { scale: 1 }
                        }}
                    >
                        <div className="flex gap-2 w-48">
                            <Button
                                onClick={() => push(`products/${props.product.slug}`)}
                                variant={'outline'}
                                className="w-full hover:cursor-pointer"
                                style={{ zIndex: 1000 }}
                            >
                                Buy
                            </Button>
                            <Button
                                onClick={() => addToCart(props.product)}
                                variant={'outline'}
                                className="hover:cursor-pointer"
                                style={{ zIndex: 1000 }}
                            >
                                <ShoppingCart />
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                className="absolute inset-0 rounded-xl"
                variants={shadowVariants}
                transition={{ duration: isMobile ? 0 : 0.3 }}
            />
        </motion.div>
    );
}