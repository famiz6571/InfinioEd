// src/pages/Subscriptions.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import SubscriptionCard from "./SubscriptionCard";
import AddSubscriptionModal from "./AddSubscriptionModal";

export interface Subscription {
  id: number;
  name: string;
  plan: "Basic" | "Pro" | "Premium";
  price: string;
  status: "Active" | "Expired" | "Cancelled";
  renewalDate: string;
}

export default function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: 1,
      name: "InfinioEd Premium",
      plan: "Premium",
      price: "$29.99 / month",
      status: "Active",
      renewalDate: "2026-01-15",
    },
    {
      id: 2,
      name: "Data Science Pro",
      plan: "Pro",
      price: "$19.99 / month",
      status: "Active",
      renewalDate: "2026-02-10",
    },
    {
      id: 3,
      name: "UI/UX Design Basic",
      plan: "Basic",
      price: "$9.99 / month",
      status: "Expired",
      renewalDate: "2025-12-01",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    setSubscriptions((prev) => prev.filter((s) => s.id !== id));
  };

  const handleAdd = (subscription: Omit<Subscription, "id">) => {
    setSubscriptions((prev) => [...prev, { ...subscription, id: Date.now() }]);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Subscriptions
        </h1>
        <Button
          variant="default"
          onClick={() => setIsModalOpen(true)}
          size="sm"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Subscription
        </Button>
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((sub) => (
          <SubscriptionCard
            key={sub.id}
            subscription={sub}
            onDelete={() => handleDelete(sub.id)}
          />
        ))}
      </div>

      {/* Add Subscription Modal */}
      <AddSubscriptionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}
