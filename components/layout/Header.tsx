export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <p>🚚 Free Delivery Above ₹499</p>

          <div className="flex gap-6">
            <span>📞 +91 8499899868</span>
            <span>✉️ support@swamyfoods.in</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

          {/* Logo */}
          <div>
            <h1 className="text-4xl font-extrabold text-green-700">
              SWAMY FOODS
            </h1>

            <p className="text-xs text-gray-500">
              Original Madugula Halwa
            </p>
          </div>

          {/* Search */}
          <div className="w-full max-w-xl mx-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border-2 border-green-700 rounded-full px-6 py-3 outline-none"
            />
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4">

            <button className="border border-green-700 px-5 py-2 rounded-full hover:bg-green-700 hover:text-white transition">
              Login
            </button>

            <button className="border border-pink-500 px-5 py-2 rounded-full hover:bg-pink-500 hover:text-white transition">
              ❤️ Wishlist
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              🛒 Cart
            </button>

          </div>

        </div>

        {/* Navigation */}
        <nav className="bg-green-700 text-white">
          <div className="max-w-7xl mx-auto flex gap-8 px-4 py-3 font-semibold">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Halwa</a>
            <a href="#">Pickles</a>
            <a href="#">Dry Fruits</a>
            <a href="#">Gift Boxes</a>
            <a href="#">Contact</a>
          </div>
        </nav>

      </header>
    </>
  );
}