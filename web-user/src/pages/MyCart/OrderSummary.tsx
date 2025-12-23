import { type FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface OrderSummaryProps {
  items: CartItem[];
}

const OrderSummary: FC<OrderSummaryProps> = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <Card className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md space-y-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Tax (5%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-gray-900 dark:text-white text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
