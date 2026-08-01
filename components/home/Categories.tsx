const categories = [
  {
    name: "Halwa",
    emoji: "🍬",
    color: "bg-orange-100",
  },
  {
    name: "Pickles",
    emoji: "🥒",
    color: "bg-green-100",
  },
  {
    name: "Dry Fruits",
    emoji: "🥜",
    color: "bg-yellow-100",
  },
  {
    name: "Sweets",
    emoji: "🍭",
    color: "bg-pink-100",
  },
  {
    name: "Gift Boxes",
    emoji: "🎁",
    color: "bg-purple-100",
  },
  {
    name: "Combos",
    emoji: "🥭",
    color: "bg-red-100",
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {categories.map((item) => (
          <div
            key={item.name}
            className={`${item.color} rounded-2xl p-8 text-center shadow hover:shadow-xl transition cursor-pointer`}
          >
            <div className="text-5xl">
              {item.emoji}
            </div>

            <h3 className="mt-5 text-xl font-bold">
              {item.name}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}