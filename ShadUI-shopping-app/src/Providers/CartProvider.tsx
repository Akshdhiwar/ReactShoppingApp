import { useState } from "react";
import iProduct from "../Interfaces/Products";
import { CartContext } from "../Context/CartContext";
import { useLocalStorage } from "../Custom hook/useLocalStorage";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { setItem, getItem } = useLocalStorage("cart");

  let cartString = getItem();
  if (cartString == null) cartString = [];
  const [cart, setCart] = useState<iProduct[]>(cartString);

  const addToCart = (product: iProduct) => {
    if (checkCart(product.id)) return;
    product.quantity = 1;
    setCart((prevCart) => [...prevCart, product]);
    const newCart = [...cart, product];
    setItem(newCart);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => product.id !== productId
      );
      setItem(updatedCart);
      return updatedCart;
    });
  };

  const addQuantity = (product: iProduct) => {
    if (checkCart(product.id)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity! + 1 };
          }
          return item;
        });
        setItem(updatedCart);
        return updatedCart;
      });
    }
  };

  const removeQuantity = (product: iProduct) => {
    if (checkCart(product.id)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity! - 1 };
          }
          return item;
        });
        setItem(updatedCart);
        return updatedCart;
      });
    }
  };

  const checkCart = (productId: number): boolean => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, addQuantity, removeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
