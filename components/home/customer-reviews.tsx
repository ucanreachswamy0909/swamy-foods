export default function OfferBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold">
          🎉 Today's Special Offers
        </h2>

        <p className="mt-3 text-lg">
          Get up to <span className="font-bold">30% OFF</span> on selected
          Original Village Foods.
        </p>

        <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-red-600 transition hover:scale-105">
          Shop Now
        </button>
      </div>
    </section>
  );
}