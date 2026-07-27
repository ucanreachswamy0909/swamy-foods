import { Categories } from "@/components/home/categories";
import CustomerReviews from "@/components/home/customer-reviews";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FeaturedVillages } from "@/components/home/featured-villages";
import { HeroSection } from "@/components/home/hero-section";
import { MeetTheMaker } from "@/components/home/meet-the-maker";
import { SearchBar } from "@/components/home/search-bar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <Categories />
      <FeaturedProducts />
      <FeaturedVillages />
      <MeetTheMaker />
      <CustomerReviews />
    </>
  );
}