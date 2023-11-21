interface iProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export default iProduct;
