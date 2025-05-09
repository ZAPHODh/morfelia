type Category = 'categoria1' | 'categoria2' | 'sazonal';

interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

type Product = {
    id: string;
    slug: string;
    name: Record<string, string>;
    images: GalleryImage[];
    metadata: Metadata;
    price: Record<string, Price>;
    category: Category;
    promoCode?: PromoCode[];
    description: string
    shortDescription: string
};

type Price = {
    value: number;
    currency: string;
};

type Metadata = {
    icons: Icons;
    title: Record<string, string>;
    description: Record<string, string>;
    openGraph: OpenGraph;
};

type Icons = {
    url: string;
    type: string;
    sizes: string;
};

type OpenGraph = {
    title: Record<string, string>;
    description: Record<string, string>;
    image?: string;
};

type PromoCode = {
    id: string;
    productId: string;
    validate: Date | string;
    code: string;
};