export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  model: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}
