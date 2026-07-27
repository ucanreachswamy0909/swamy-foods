"use client";

import { Menu, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="text-lg font-bold tracking-[0.15em] text-foreground">
            {SITE.name}
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {SITE.subtitle}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {SITE.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="size-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Cart"
          >
            <ShoppingBag className="size-5" />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Button>

          <Button className="bg-brand hover:bg-brand/90">
            Shop Now
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>
      </nav>

      {isMobileOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="flex flex-col gap-2 p-4">
            {SITE.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}

            <Button className="mt-3 bg-brand hover:bg-brand/90">
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}