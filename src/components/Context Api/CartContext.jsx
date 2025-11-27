import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from sessionStorage when app starts
  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  function addToCart(pID, name) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.pID === pID);
      if (existing) {
        // increase quantity
        return prevCart.map((item) =>
          item.pID === pID ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      } else {
        return [...prevCart, { pID, name, qty: 1 }];
      }
    });
  }

  //for update value
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    updateCart();
  }, []);

  const updateCart = () => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
