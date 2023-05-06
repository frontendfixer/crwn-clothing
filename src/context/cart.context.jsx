/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contain productToAdd
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  //if found, increase quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/ new cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCout: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const [cartCout, setCartCount] = useState(0);

  useEffect(() => {
    const totalItemsCout = cartItems.reduce((acc, el) => el.quantity + acc, 0);
    return setCartCount(totalItemsCout);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    cartItems,
    cartCout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
