export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  village: string;
  rating: number;
  image: string;
  badge?: string;
}

export interface Village {
  id: string;
  name: string;
  state: string;
  description: string;
  productCount: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Maker {
  name: string;
  title: string;
  bio: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}
