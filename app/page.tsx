import Header from "@/components/layout/Header";
import HeroSlider from "@/components/home/HeroSlider";
import Categories from "@/components/home/Categories";
import TodaysDeals from "@/components/home/TodaysDeals";
import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories */}
      <Categories />

      {/* Today's Deals */}
      <TodaysDeals />

      {/* Best Selling Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">
            ⭐ Best Selling Products
          </h2>

          <button className="text-green-700 font-semibold hover:underline">
            View All →
          </button>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            No Products Available
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-3xl font-bold">
              SWAMY FOODS
            </h2>

            <p className="mt-4 text-gray-300">
              Original Madugula Halwa, Pickles, Dry Fruits and Premium Traditional Foods.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>Shop</li>
              <li>Categories</li>
              <li>Today's Deals</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Categories
            </h3>

            <ul className="space-y-2">
              <li>Halwa</li>
              <li>Pickles</li>
              <li>Dry Fruits</li>
              <li>Gift Boxes</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Contact
            </h3>

            <p>📞 +91 8499899868</p>
            <p className="mt-2">
              ✉️ support@swamyfoods.in
            </p>
          </div>

        </div>

        <div className="border-t border-green-700 py-6 text-center">
          © 2026 SWAMY FOODS. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}