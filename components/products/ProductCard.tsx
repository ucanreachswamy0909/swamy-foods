type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={product.image_url || "https://placehold.co/600x400"}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-2xl font-bold text-green-700 mt-4">
          ₹{product.price}
        </p>

        <button className="w-full mt-5 bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg">
          Add To Cart
        </button>

      </div>
    </div>
  );
}