'use client';

import CarouselGallery from "@/components/ui/carousel-gallery";
import { featuredProducts, galleryItems, newArrivals, saleProducts, seasonalProducts } from "../../../mocks/homemock";
import { CategoryMenu } from "@/components/ui/category-menu";
import { ProductSection } from "@/components/home/product-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full">
        <CarouselGallery
          items={galleryItems}
          autoPlay={true}
          autoPlayInterval={6000}
          showThumbnails={true}
          showControls={true}
          showIndicators={true}
        />
      </section>
      <section className="w-full py-16">
        <CategoryMenu />
      </section>

      <section className="w-full bg-muted/30">
        <ProductSection
          title="Destaques da Coleção"
          subtitle="Peças exclusivas selecionadas especialmente para você"
          products={featuredProducts}
          viewAllLink="/destaques"
          variant="featured"
          limit={2}
        />
      </section>
      <ProductSection
        title="Coleção Primavera"
        subtitle="Peças inspiradas nas cores e formas da estação mais florida do ano"
        products={seasonalProducts}
        viewAllLink="/colecoes/primavera"
        viewAllText="Ver Coleção Completa"
        limit={4}
      />
      <ProductSection
        title="Ofertas Especiais"
        subtitle="Aproveite descontos imperdíveis em peças selecionadas"
        products={saleProducts}
        viewAllLink="/promocoes"
        viewAllText="Ver Todas as Ofertas"
        className="bg-muted/30"
        limit={6}
        variant="compact"
      />
      <ProductSection
        title="Novidades"
        subtitle="As últimas adições ao nosso catálogo"
        products={newArrivals}
        viewAllLink="/novidades"
        limit={4}
      />
    </main>
  )
}
