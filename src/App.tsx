import { useState } from "react";
import Header from "./components/Header";
import ProductsList, { type Product } from "./components/ProductsList";
import Cart, { type CartItem } from "./components/Cart";

const PRODUCTS: Product[] = [
  { id: "a", name: "Product A", price: 25 },
  { id: "b", name: "Product B", price: 40 },
  { id: "c", name: "Product C", price: 30 },
  { id: "d", name: "Product D", price: 35 },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col gap-6">
      <Header totalItems={totalItems} />
      <div className="flex flex-col md:flex-row gap-6">
        <ProductsList products={PRODUCTS} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}
