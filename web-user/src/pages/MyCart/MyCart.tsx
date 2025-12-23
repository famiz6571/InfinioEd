import { useState } from "react";
import { courses } from "@/data/courses";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";

export default function MyCart() {
  const initialCart = courses
    .filter((c) => [1, 3, 5].includes(c.id)) // Pick dummy courses
    .map((c) => ({
      id: c.id,
      title: c.title,
      price: Math.floor(Math.random() * 100) + 20,
      image: c.image,
    }));

  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        My Cart
      </h1>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <CartItems items={cartItems} onRemove={handleRemoveItem} />
          </div>

          {/* Order Summary */}
          <OrderSummary items={cartItems} />
        </div>
      )}
    </div>
  );
}
