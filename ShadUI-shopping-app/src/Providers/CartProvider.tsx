import { useState } from "react";
import iProduct from "../Interfaces/Products";
import { CartContext } from "../Context/CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<iProduct[]>([]);

  const addToCart = (product: iProduct) => {
    if (checkCart(product.ID)) return;
    product.quantity = 1;
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (ele:any) => ele.Product.ID !== productId
      );
      return updatedCart;
    });
  };

  const addQuantity = (id: string) => {
    if (checkCart(id)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item : any) => {
          if (item.Product.ID === id) {
            return { ...item, Quantity: item.Quantity! + 1 };
          }
          return item;
        });
        return updatedCart;
      });
    }
  };

  const removeQuantity = (product: iProduct) => {
    if (checkCart(product.ID)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) => {
          if (item.ID === product.ID) {
            return { ...item, quantity: item.quantity! - 1 };
          }
          return item;
        });
        return updatedCart;
      });
    }
  };

  const checkCart = (productId: string): boolean => {
    return cart.some((item:any) => item.Product.ID === productId);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, addQuantity, removeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
