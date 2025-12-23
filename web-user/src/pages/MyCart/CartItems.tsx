import { type FC } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItemsProps {
  items: CartItem[];
  onRemove: (id: number) => void;
}

const CartItems: FC<CartItemsProps> = ({ items, onRemove }) => {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 rounded-lg object-cover mb-4 sm:mb-0"
          />
          <div className="flex-1 sm:ml-4 flex flex-col sm:flex-row sm:items-center justify-between w-full">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => onRemove(item.id)}
              className="mt-4 sm:mt-0 flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </Button>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CartItems;
