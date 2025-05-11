'use client';

import { Card } from '@/components/ui/product-card';
import CarouselGallery from '@/components/ui/carousel-gallery';
import { CategoryMenu } from '@/components/ui/category-menu';
import { products } from '../../../mocks/product';
const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop",
    alt: "Modern architecture with glass and steel structures",
    width: 1470,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1474&auto=format&fit=crop",
    alt: "Historic building with ornate details and columns",
    width: 1474,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1470&auto=format&fit=crop",
    alt: "Minimalist concrete structure with clean lines",
    width: 1470,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop",
    alt: "Futuristic museum design with curved surfaces",
    width: 1470,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1467&auto=format&fit=crop",
    alt: "Brutalist architectural style with raw concrete elements",
    width: 1467,
    height: 600,
  },
];
export default function HomePage() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <CarouselGallery autoPlay={true} autoPlayInterval={5000} showThumbnails={false} images={images} />
      <CategoryMenu />
      <Card product={products[0]} />
    </div>
  );
}