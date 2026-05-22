export interface LookbookItem {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  description?: string;
  details?: string[];
  stylingTip?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  avatarLetter: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  size: 'large' | 'medium' | 'small';
}
