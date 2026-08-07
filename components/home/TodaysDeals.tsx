export default function TodaysDeals() {
  const deals = [
    {
      id: 1,
      name: "Original Madugula Halwa",
      image: "https://placehold.co/500x500?text=Halwa",
      price: 399,
      oldPrice: 499,
      discount: "20% OFF",
    },
    {
      id: 2,
      name: "Premium Mango Pickle",
      image: "https://placehold.co/500x500?text=Pickle",
      price: 249,
      oldPrice: 349,
      discount: "30% OFF",
    },
    {
      id: 3,
      name: "Premium Dry Fruits Box",
      image: "https://placehold.co/500x500?text=Dry+Fruits",
      price: 699,
      oldPrice: 899,
      discount: "22% OFF",
    },
    {
      id: 4,
      name: "Festival Gift Box",
      image: "https://placehold.co/500x500?text=Gift+Box",
      price: 999,
      oldPrice: 1299,
      discount: "25% OFF",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">🔥 Today's Deals</h2>

        <button className="text-green-700 font-semibold hover:underline">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {deals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              <span className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {item.discount}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-lg">{item.name}</h3>

              <div className="flex items-center gap-3 mt-3">
                <span className="text-2xl font-bold text-green-700">
                  ₹{item.price}
                </span>

                <span className="line-through text-gray-500">
                  ₹{item.oldPrice}
                </span>
              </div>

              <button className="mt-5 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}