export const mockProduct: Product = {
    id: 'prod-001',
    slug: 'produto-exemplo',
    name: {
        pt: 'Produto Exemplo',
        en: 'Example Product',
    },
    images: [
        {
            src: 'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Imagem do Produto Exemplo',
            width: 800,
            height: 600,
        },
    ],
    metadata: {
        icons: {
            url: '/favicon.ico',
            type: 'image/x-icon',
            sizes: '32x32',
        },
        title: {
            pt: 'Título SEO em Português',
            en: 'SEO Title in English',
        },
        description: {
            pt: 'Descrição SEO em Português',
            en: 'SEO Description in English',
        },
        openGraph: {
            title: {
                pt: 'OG Título em Português',
                en: 'OG Title in English',
            },
            description: {
                pt: 'OG Descrição em Português',
                en: 'OG Description in English',
            },
            image: '/images/og-produto-exemplo.jpg',
        },
    },
    price: {
        pt: {
            value: 99.9,
            currency: 'BRL',
        },
        en: {
            value: 19.9,
            currency: 'USD',
        },
    },
    category: 'categoria1',
    promoCode: [
        {
            id: 'promo001',
            productId: 'prod-001',
            validate: new Date('2025-12-31'),
            code: 'DESCONTO10',
        },
    ],
    description: 'Este é um produto de exemplo com uma descrição detalhada.',
    shortDescription: 'Produto de exemplo.',
};