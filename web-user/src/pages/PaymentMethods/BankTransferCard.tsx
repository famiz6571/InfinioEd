import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface BankTransferCardProps {
  bankName?: string;
  accountNumber?: string;
  onDelete: () => void;
}

const BankTransferCard: FC<BankTransferCardProps> = ({
  bankName,
  accountNumber,
  onDelete,
}) => (
  <div className="relative rounded-xl shadow-lg p-6 text-gray-900 bg-gray-100 flex flex-col justify-between h-32 hover:scale-105 transition-transform">
    <div className="flex justify-between items-start">
      <span className="font-bold text-lg">{bankName}</span>
      <Button
        size="icon"
        variant="ghost"
        className="text-black hover:bg-white/20 p-1 rounded-full"
        onClick={onDelete}
      >
        <Trash2 className="w-5 h-5" />
      </Button>
    </div>
    <p className="mt-auto">{accountNumber}</p>
  </div>
);

export default BankTransferCard;
