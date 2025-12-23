import { type FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const EmptyCart: FC = () => (
  <Card className="p-6 flex flex-col items-center justify-center space-y-4 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
    <ShoppingCart className="w-16 h-16 text-gray-400" />
    <CardContent className="text-center">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Your cart is empty
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Browse courses and add them to your cart to get started!
      </p>
    </CardContent>
  </Card>
);

export default EmptyCart;
