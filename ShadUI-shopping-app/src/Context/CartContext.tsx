import { createContext } from "react";
import iProduct from "../Interfaces/Products";

interface CartContextValue {
  cart: iProduct[];
  setCart : (products : iProduct[]) => void
  addToCart: (product: iProduct) => void;
  removeFromCart: (productId: string) => void;
  addQuantity: (id : string) => void;
  removeQuantity: (id : string) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
