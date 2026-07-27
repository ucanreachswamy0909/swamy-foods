export default function CustomerReviews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">
        ⭐ Customer Reviews
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6 shadow-sm">
          <p className="text-lg font-semibold">★★★★★</p>
          <p className="mt-3 text-gray-600">
            Excellent quality products. Fast delivery and authentic village
            taste.
          </p>
          <h3 className="mt-4 font-bold">- Ramesh</h3>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <p className="text-lg font-semibold">★★★★★</p>
          <p className="mt-3 text-gray-600">
            Fresh spices and homemade pickles. Highly recommended.
          </p>
          <h3 className="mt-4 font-bold">- Lakshmi</h3>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <p className="text-lg font-semibold">★★★★★</p>
          <p className="mt-3 text-gray-600">
            Great shopping experience. I will definitely order again.
          </p>
          <h3 className="mt-4 font-bold">- Suresh</h3>
        </div>
      </div>
    </section>
  );
}