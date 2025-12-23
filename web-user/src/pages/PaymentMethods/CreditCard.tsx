import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface CreditCardProps {
  type: string;
  last4?: string;
  expiry?: string;
  cardHolder?: string;
  color?: string;
  onDelete: () => void;
}

const CreditCard: FC<CreditCardProps> = ({
  last4,
  expiry,
  cardHolder,
  color = "#4f46e5",
  onDelete,
}) => (
  <div
    style={{ backgroundColor: color }}
    className="relative rounded-xl shadow-lg p-6 text-white flex flex-col justify-between h-40 hover:scale-105 transition-transform"
  >
    <div className="flex justify-between items-start">
      <span className="font-bold text-lg">Credit Card</span>
      <Button
        size="icon"
        variant="ghost"
        className="text-white hover:bg-white/20 p-1 rounded-full"
        onClick={onDelete}
      >
        <Trash2 className="w-5 h-5" />
      </Button>
    </div>
    <div className="mt-auto">
      <p className="text-xl tracking-widest">**** **** **** {last4}</p>
      <div className="flex justify-between mt-2 text-sm">
        <span>{cardHolder}</span>
        <span>{expiry}</span>
      </div>
    </div>
  </div>
);

export default CreditCard;
