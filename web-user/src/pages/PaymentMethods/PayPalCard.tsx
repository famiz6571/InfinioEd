import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface PayPalCardProps {
  email?: string;
  onDelete: () => void;
}

const PayPalCard: FC<PayPalCardProps> = ({ email, onDelete }) => (
  <div className="relative rounded-xl shadow-lg p-6 text-white bg-blue-600 flex flex-col justify-between h-32 hover:scale-105 transition-transform">
    <div className="flex justify-between items-start">
      <span className="font-bold text-lg">PayPal</span>
      <Button
        size="icon"
        variant="ghost"
        className="text-white hover:bg-white/20 p-1 rounded-full"
        onClick={onDelete}
      >
        <Trash2 className="w-5 h-5" />
      </Button>
    </div>
    <p className="mt-auto text-white/90">{email}</p>
  </div>
);

export default PayPalCard;
