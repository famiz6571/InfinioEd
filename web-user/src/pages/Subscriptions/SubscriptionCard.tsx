// src/pages/components/SubscriptionCard.tsx
import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SubscriptionCardProps {
  subscription: {
    name: string;
    plan: string;
    price: string;
    status: "Active" | "Expired" | "Cancelled";
    renewalDate: string;
  };
  onDelete: () => void;
}

const SubscriptionCard: FC<SubscriptionCardProps> = ({
  subscription,
  onDelete,
}) => {
  const statusColor =
    subscription.status === "Active"
      ? "bg-green-100 text-green-800"
      : subscription.status === "Expired"
      ? "bg-red-100 text-red-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <div className="relative rounded-xl shadow-lg p-6 bg-white dark:bg-gray-800 flex flex-col justify-between hover:shadow-2xl transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {subscription.name}
        </h3>
        <Button
          size="icon"
          variant="ghost"
          className="p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900"
          onClick={onDelete}
        >
          <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
        </Button>
      </div>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {subscription.plan}
      </p>
      <p className="mt-1 text-base font-bold">{subscription.price}</p>
      <div className="mt-3 flex justify-between items-center">
        <Badge className={statusColor}>{subscription.status}</Badge>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Renewal: {subscription.renewalDate}
        </span>
      </div>
    </div>
  );
};

export default SubscriptionCard;
