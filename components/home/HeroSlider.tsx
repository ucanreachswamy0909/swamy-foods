"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Original Madugula Halwa",
    subtitle: "Traditional Taste Since Generations",
    button: "Shop Now",
    bg: "from-green-900 to-yellow-700",
  },
  {
    title: "Premium Gift Boxes",
    subtitle: "Perfect Gifts For Every Occasion",
    button: "Explore Gifts",
    bg: "from-red-700 to-orange-500",
  },
  {
    title: "Free Delivery",
    subtitle: "On Orders Above ₹499",
    button: "Order Today",
    bg: "from-blue-700 to-cyan-500",
  },
  {
    title: "Fresh Pickles & Dry Fruits",
    subtitle: "100% Quality Products",
    button: "View Collection",
    bg: "from-purple-700 to-pink-500",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`bg-gradient-to-r ${slides[current].bg} text-white transition-all duration-700`}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          {slides[current].title}
        </h1>

        <p className="text-xl mt-6">
          {slides[current].subtitle}
        </p>

        <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-xl font-bold transition">
          {slides[current].button}
        </button>

        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}