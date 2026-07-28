export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Top Bar */}
      <div className="bg-green-900 text-white text-center py-2 text-sm">
        🚚 Free Delivery Above ₹499 | 📞 +91 8499899868
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-10 py-5 shadow-md">
        <h1 className="text-3xl font-bold text-green-800">
          SWAMY FOODS
        </h1>

        <nav className="flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Best Sellers</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
          Cart
        </button>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-yellow-700 text-white text-center py-24">
        <h2 className="text-6xl font-bold mb-6">
          Original Madugula Halwa
        </h2>

        <p className="text-xl">
          Traditional Taste Since Generations
        </p>

        <button className="mt-8 bg-orange-500 px-8 py-4 rounded-xl text-lg">
          Shop Now
        </button>
      </section>

      {/* Featured */}
      <section className="py-20 px-10">

        <h2 className="text-4xl font-bold text-center mb-12">
          Best Selling Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-6 shadow-lg">
            <img
              src="https://placehold.co/400x300"
              className="rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-4">
              Madugula Halwa 500g
            </h3>
            <p className="text-green-700 font-bold mt-2">
              ₹299
            </p>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg mt-4">
              Add to Cart
            </button>
          </div>

          <div className="border rounded-xl p-6 shadow-lg">
            <img
              src="https://placehold.co/400x300"
              className="rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-4">
              Madugula Halwa 1Kg
            </h3>
            <p className="text-green-700 font-bold mt-2">
              ₹599
            </p>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg mt-4">
              Add to Cart
            </button>
          </div>

          <div className="border rounded-xl p-6 shadow-lg">
            <img
              src="https://placehold.co/400x300"
              className="rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-4">
              Premium Gift Box
            </h3>
            <p className="text-green-700 font-bold mt-2">
              ₹999
            </p>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg mt-4">
              Add to Cart
            </button>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-10 text-center">

        <h2 className="text-3xl font-bold">
          SWAMY FOODS
        </h2>

        <p className="mt-4">
          📞 8499899868
        </p>

        <p>
          Original Madugula Halwa
        </p>

        <p className="mt-6">
          © 2026 SWAMY FOODS. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}