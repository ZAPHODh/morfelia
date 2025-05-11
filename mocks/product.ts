export const products: Product[] = [
    {
        id: "3",
        slug: "anel-diamante",
        name: {
            pt: "Anel de Diamante",
            en: "Diamond Ring"
        },
        images: [
            {
                src: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Anel de ouro com diamante central",
                width: 800,
                height: 1000
            }, {
                src: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Anel de ouro com diamante central",
                width: 800,
                height: 1000
            }
        ],
        metadata: {
            icons: {
                url: "/icons/anel.png",
                type: "image/png",
                sizes: "32x32"
            },
            title: {
                pt: "Anel de Diamante - Luxo e Elegância",
                en: "Diamond Ring - Luxury and Elegance"
            },
            description: {
                pt: "Anel em ouro 18k com diamante central de 0.5ct",
                en: "18k gold ring with 0.5ct center diamond"
            },
            openGraph: {
                title: {
                    pt: "Anel de Diamante Premium",
                    en: "Premium Diamond Ring"
                },
                description: {
                    pt: "Joia perfeita para ocasiões especiais",
                    en: "Perfect jewel for special occasions"
                },
                image: "/images/anel-diamante-og.jpg"
            }
        },
        price: {
            pt: {
                value: 8999.9,
                currency: "BRL"
            },
            en: {
                value: 1799.9,
                currency: "USD"
            }
        },
        category: "categoria1",
        promoCode: [
            {
                id: "promo3",
                productId: "3",
                validate: "2025-12-31T23:59:59Z",
                code: "DIAMANTE10"
            }
        ],
        description: "Anel em ouro 18k com diamante VVS1 de 0.5 quilates, lapidação brilhante.",
        shortDescription: "Anel de diamante em ouro 18k",
        comments: [
            {
                id: "comment3",
                userId: "user789",
                content: "Presente perfeito para noivado!",
                stars: 5
            }
        ],
        sizes: ["15", "16", "17", "18"],
        materials: {
            principal: "Ouro 18k",
            detalhe: "Diamante VVS1"
        }
    },
    {
        id: "4",
        slug: "colar-prata-acessorios",
        name: {
            pt: "Colar de Prata Banhada",
            en: "Silver Plated Necklace"
        },
        images: [
            {
                src: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Colar prateado com pingente geométrico",
                width: 800,
                height: 1000
            }
        ],
        metadata: {
            icons: {
                url: "/icons/colar.png",
                type: "image/png",
                sizes: "32x32"
            },
            title: {
                pt: "Colar Moderno em Prata Banhada",
                en: "Modern Silver Plated Necklace"
            },
            description: {
                pt: "Bijuteria fashion com design contemporâneo",
                en: "Fashion jewelry with contemporary design"
            },
            openGraph: {
                title: {
                    pt: "Colar de Prata Banhada",
                    en: "Silver Plated Necklace"
                },
                description: {
                    pt: "Acessório perfeito para looks do dia a dia",
                    en: "Perfect accessory for daily looks"
                },
                image: "/images/colar-prata-og.jpg"
            }
        },
        price: {
            pt: {
                value: 89.9,
                currency: "BRL"
            },
            en: {
                value: 17.9,
                currency: "USD"
            }
        },
        category: "categoria1",
        description: "Colar em aço inoxidável banhado a prata com pingente em formato geométrico",
        shortDescription: "Bijuteria moderna em prata banhada",
        comments: [
            {
                id: "comment4",
                userId: "user012",
                content: "Amei o design minimalista!",
                stars: 5
            }
        ],
        sizes: ["40cm", "45cm", "50cm"],
        materials: {
            principal: "Aço inoxidável",
            detalhe: "Banho em prata 925"
        }
    },
    {
        id: "5",
        slug: "brinco-argola-ouro",
        name: {
            pt: "Brinco Argola em Ouro",
            en: "Gold Hoop Earrings"
        },
        images: [
            {
                src: "/images/brinco-argola.jpg",
                alt: "Argolas douradas de diferentes tamanhos",
                width: 800,
                height: 1000
            }
        ],
        metadata: {
            icons: {
                url: "/icons/brinco.png",
                type: "image/png",
                sizes: "32x32"
            },
            title: {
                pt: "Argolas em Ouro 18k - Clássico Atemporal",
                en: "18k Gold Hoops - Timeless Classic"
            },
            description: {
                pt: "Conjunto de 3 pares de argolas em ouro maciço",
                en: "Set of 3 pairs of solid gold hoop earrings"
            },
            openGraph: {
                title: {
                    pt: "Argolas em Ouro 18k",
                    en: "18k Gold Hoops"
                },
                description: {
                    pt: "Clássico que nunca sai de moda",
                    en: "Timeless classic that never goes out of style"
                },
                image: "/images/brinco-argola-og.jpg"
            }
        },
        price: {
            pt: {
                value: 2499.9,
                currency: "BRL"
            },
            en: {
                value: 499.9,
                currency: "USD"
            }
        },
        category: "categoria1",
        promoCode: [
            {
                id: "promo5",
                productId: "5",
                validate: "2025-06-30T23:59:59Z",
                code: "ARGOLA20"
            }
        ],
        description: "Conjunto com 3 pares de argolas em ouro 18k nos tamanhos 4mm, 6mm e 8mm",
        shortDescription: "Argolas clássicas em ouro 18k",
        comments: [],
        sizes: ["Único"],
        materials: {
            principal: "Ouro 18k",
            detalhe: "Fechamento de segurança"
        }
    }
];
