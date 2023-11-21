import { createContext } from "react";
import iProduct from "../Interfaces/Products";

interface CartContextValue {
  cart: iProduct[];
  addToCart: (product: iProduct) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
