interface iProduct {
  ID: string;
  Image: string;
  Title: string;
  Description: string;
  Price: number;
  Category?: string;
  Rating: number;
  Count: number;
  quantity?: number;
  isAddedToCart: boolean;
  PriceID : string;
  CreatedAt : string
}

export default iProduct;
