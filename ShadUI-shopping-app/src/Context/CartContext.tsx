import { createContext } from "react";
import iProduct from "../Interfaces/Products";

interface CartContextValue {
  cart: iProduct[];
  addToCart: (product: iProduct) => void;
  removeFromCart: (productId: string) => void;
  addQuantity: (product: iProduct) => void;
  removeQuantity: (product: iProduct) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
