import type { Category, Maker, Product, Review, Village } from "@/types";

export const categories: Category[] = [
  { id: "1", name: "Madugula Halwa", icon: "🍮", productCount: 35 },
  { id: "2", name: "Pickles", icon: "🥒", productCount: 82 },
  { id: "3", name: "Spices", icon: "🌶️", productCount: 140 },
  { id: "4", name: "Masala Powders", icon: "🧂", productCount: 65 },
  { id: "5", name: "Rice", icon: "🍚", productCount: 120 },
  { id: "6", name: "Premium Rice", icon: "🌾", productCount: 58 },
  { id: "7", name: "Organic Rice", icon: "🍙", productCount: 36 },
  { id: "8", name: "Millets", icon: "🌾", productCount: 74 },
  { id: "9", name: "Honey", icon: "🍯", productCount: 42 },
  { id: "10", name: "A2 Ghee", icon: "🧈", productCount: 22 },
  { id: "11", name: "Cold Pressed Oils", icon: "🫒", productCount: 40 },
  { id: "12", name: "Jaggery", icon: "🟤", productCount: 30 },
  { id: "13", name: "Palm Jaggery", icon: "🌴", productCount: 15 },
  { id: "14", name: "Dry Fruits", icon: "🥜", productCount: 55 },
  { id: "15", name: "Nuts & Seeds", icon: "🌰", productCount: 45 },
  { id: "16", name: "Village Snacks", icon: "🍘", productCount: 90 },
  { id: "17", name: "Traditional Sweets", icon: "🍬", productCount: 48 },
  { id: "18", name: "Papads", icon: "🥠", productCount: 24 },
  { id: "19", name: "Flours", icon: "🌾", productCount: 50 },
  { id: "20", name: "Pulses", icon: "🫘", productCount: 60 },
  { id: "21", name: "Coffee", icon: "☕", productCount: 18 },
  { id: "22", name: "Herbal Tea", icon: "🍵", productCount: 16 },
  { id: "23", name: "Natural Juices", icon: "🧃", productCount: 20 },
  { id: "24", name: "Handmade Products", icon: "🧺", productCount: 28 },
];

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Handground Turmeric",
    description: "Sun-dried and stone-ground from Andhra villages",
    price: 299,
    category: "Spices",
    village: "Araku Valley",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1615485500705-68c75f2c3b45?w=600&h=600&fit=crop",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Mango Pickle",
    description: "Traditional avakaya recipe, aged 30 days",
    price: 349,
    category: "Pickles",
    village: "Rajahmundry",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=600&fit=crop",
    badge: "Popular",
  },
  {
    id: "3",
    name: "Foxtail Millet",
    description: "Organic korra biyyam from tribal farmers",
    price: 189,
    category: "Grains",
    village: "Paderu",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop",
  },
  {
    id: "4",
    name: "Cold-Pressed Groundnut Oil",
    description: "Wood-pressed chekku oil, zero additives",
    price: 449,
    category: "Oils",
    village: "Anantapur",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop",
    badge: "Premium",
  },
];

export const featuredVillages: Village[] = [
  {
    id: "1",
    name: "Araku Valley",
    state: "Andhra Pradesh",
    description:
      "Nestled in the Eastern Ghats, home to organic coffee and tribal spice traditions.",
    productCount: 42,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    name: "Chettinad",
    state: "Tamil Nadu",
    description:
      "Famous for fiery masalas, heritage pickles, and centuries-old recipes.",
    productCount: 38,
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87f0b8?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    name: "Malnad",
    state: "Karnataka",
    description:
      "Lush Western Ghats region known for wild honey, spices, and forest produce.",
    productCount: 29,
    image:
      "https://images.unsplash.com/photo-1500595046743-a3fb4746f3b5?w=800&h=600&fit=crop",
  },
];

export const customerReviews: Review[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Hyderabad",
    rating: 5,
    comment:
      "The turmeric is unlike anything from stores — vibrant color, rich aroma. You can taste the village authenticity in every spoonful.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    comment:
      "Finally found real mango pickle that tastes like my grandmother's. Swamy Foods connects us to roots we thought were lost.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Ananya Reddy",
    location: "Chennai",
    rating: 5,
    comment:
      "Love knowing exactly which village my food comes from. Premium packaging, fast delivery, and genuinely farm-fresh quality.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export const maker: Maker = {
  name: "Swamy Raju",
  title: "Founder & Village Food Curator",
  bio: "Born in a small village in Andhra Pradesh, Swamy grew up watching his mother and grandmother preserve traditional recipes passed down through generations. After years in the city, he returned to his roots with a mission: connect urban families with authentic village foods while empowering rural makers with fair prices and dignified livelihoods.",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
  stats: [
    { label: "Village Partners", value: "120+" },
    { label: "Products Curated", value: "350+" },
    { label: "Happy Families", value: "15K+" },
  ],
};
