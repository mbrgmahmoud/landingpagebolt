export interface ProductData {
  title: string;
  description: string;
  features: string[];
  price: string;
  images: string[];
  reviews: Review[];
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface Order {
  id: string;
  name: string;
  phone: string;
  address: string;
  offer: 'normal' | 'special';
  timestamp: string;
  product: ProductData;
}

export interface GeneratedPage {
  html: string;
  productData: ProductData;
  language: string;
}