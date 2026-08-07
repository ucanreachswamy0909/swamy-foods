import { getCategories } from "@/lib/categories";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold">
          Shop By Category
        </h2>

        <button className="text-green-700 font-bold hover:underline">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {categories.map((category: any) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
          >
            <img
              src={
                category.image_url ||
                "https://placehold.co/400x400?text=Category"
              }
              alt={category.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}