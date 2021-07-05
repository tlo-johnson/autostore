interface Category {
  name: string;
  id: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  tags: string[];
  categories: Category[];
}
