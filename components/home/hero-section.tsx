"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  MapPinned,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-16">

      {/* Background */}
      <div className="absolute inset-0 -z-10">

        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87f0b8?w=1920&h=1080&fit=crop"
          alt="Village Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />

      </div>

      <div className="mx-auto flex min-h-[calc(90vh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
                  {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
          >
            <Leaf className="h-4 w-4" />
            Farm Fresh • Original Village Foods
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl"
          >
            {SITE.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-xl font-semibold uppercase tracking-widest text-green-700"
          >
            {SITE.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
          >
            {SITE.description}
          </motion.p>
                    {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
            >
              Explore Villages
            </Button>
          </motion.div>

          {/* Trust Cards */}
<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
  <div className="rounded-xl bg-white/80 p-4 shadow-md">
    <Leaf className="mb-2 h-6 w-6 text-green-600" />
    <h3 className="font-semibold">100% Natural</h3>
    <p className="text-xs text-gray-500">Homemade Foods</p>
  </div>

  <div className="rounded-xl bg-white/80 p-4 shadow-md">
    <ShieldCheck className="mb-2 h-6 w-6 text-green-600" />
    <h3 className="font-semibold">Verified Quality</h3>
    <p className="text-xs text-gray-500">Premium Products</p>
  </div>

  <div className="rounded-xl bg-white/80 p-4 shadow-md">
    <Truck className="mb-2 h-6 w-6 text-green-600" />
    <h3 className="font-semibold">Fast Delivery</h3>
    <p className="text-xs text-gray-500">Across India</p>
  </div>

  <div className="rounded-xl bg-white/80 p-4 shadow-md">
    <MapPinned className="mb-2 h-6 w-6 text-green-600" />
    <h3 className="font-semibold">500+ Villages</h3>
    <p className="text-xs text-gray-500">Authentic Foods</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}