import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-gray-100 min-h-screen">

      <Header />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Best Selling Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </main>
  );
}