type Category = 'categoria1' | 'categoria2' | 'sazonal'

interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

type Product = {
    id: string
    name: string
    images: string[]
    metadata: Metadata
    price: number
    category: Category
    promoCode?: PromoCode[]
}

type Metadata = {
    icons: Icons
    title: Title
    description: string
    openGraph: OpenGraph
}

type Icons = {
    url: string,
    type: string,
    sizes: string
}

type Title = {
    default: string,
    template: string
}

type OpenGraph = {
    title: string,
    description: string,
}

type PromoCode = {
    id: string
    productId: string
    validate: Date
    code: string
}