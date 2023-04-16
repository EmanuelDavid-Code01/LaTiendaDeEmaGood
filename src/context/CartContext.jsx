import { createContext, useState, useEffect } from "react";

export const CartDataContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (ropa) => {
    const ropaInCart = cart.find((item) => item.id === ropa.id);
    if (ropaInCart) {
      const updatedCart = cart.map((item) =>
        item.id === ropa.id
          ? { ...item, buyTotal: item.buyTotal + ropa.buyTotal }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, ropa]);
    }
  };

  const removeFromCart = (ropaId) => {
    const newCart = cart.filter((ropa) => ropa.id !== ropaId);
    setCart(newCart);
  };

  const cartprecioTotal = () => {
    return cart.reduce((total, ropa) => total + ropa.precio * ropa.buyTotal, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartDataContext.Provider
      value={{
        cart,
        setCart,
        removeFromCart,
        addToCart,
        clearCart,
        cartprecioTotal,
      }}
    >
      {children}
    </CartDataContext.Provider>
  );
};

export default CartContext;
