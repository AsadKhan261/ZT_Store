import { createContext, useContext, useMemo, useState } from 'react';
import { products } from '../data/products';

const CartContext = createContext(null);

const initialCart = [
  { productId: 1, quantity: 1 },
  { productId: 4, quantity: 1 },
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(initialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => setToast(null), 2500);
  };

  const addToCart = (productId, quantity = 1) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.productId === productId);
      if (existing) {
        return items.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [...items, { productId, quantity }];
    });

    showToast('Added to cart');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((items) =>
      items.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.productId !== productId));
    showToast('Item removed');
  };

  const clearCart = () => setCartItems([]);

  const enrichedCartItems = useMemo(
    () =>
      cartItems
        .map((item) => ({
          ...item,
          product: products.find((product) => product.id === item.productId),
        }))
        .filter((item) => item.product),
    [cartItems],
  );

  const subtotal = enrichedCartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const shipping = enrichedCartItems.length ? 250 : 0;
  const total = subtotal + shipping;
  const itemCount = enrichedCartItems.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cartItems: enrichedCartItems,
    itemCount,
    subtotal,
    shipping,
    total,
    toast,
    isCartOpen,
    mobileMenuOpen,
    setIsCartOpen,
    setMobileMenuOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
