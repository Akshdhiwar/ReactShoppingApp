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

  isAddedToCart: boolean;
}

export default iProduct;
