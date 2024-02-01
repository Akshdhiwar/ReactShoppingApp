import { useState } from "react";
import iProduct from "../Interfaces/Products";
import { CartContext } from "../Context/CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  let cartString = localStorage.getItem("cart") as string;
  if (cartString == null) cartString = "[]";
  const [cart, setCart] = useState<iProduct[]>(JSON.parse(cartString));

  const addToCart = (product: iProduct) => {
    if (checkCart(product.id)) return;
    product.quantity = 1;
    setCart((prevCart) => [...prevCart, product]);
    const newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addQuantity = (product: iProduct) => {
    if (checkCart(product.id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity! + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const removeQuantity = (product: iProduct) => {
    if (checkCart(product.id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity! - 1 };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(cart));
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
