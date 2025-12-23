// src/pages/PurchaseHistory/PurchaseHistory.tsx
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Wallet } from "lucide-react";
import { toast } from "react-hot-toast";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

interface Purchase {
  id: number;
  method: "Credit Card" | "PayPal" | "Bank Transfer";
  amount: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
  details?: string;
}

export default function PurchaseHistory() {
  const [purchases] = useState<Purchase[]>([
    {
      id: 1,
      method: "Credit Card",
      amount: "$99.99",
      date: "2025-12-22",
      status: "Completed",
      details: "Full Stack Web Development",
    },
    {
      id: 2,
      method: "PayPal",
      amount: "$49.99",
      date: "2025-11-18",
      status: "Pending",
      details: "UI/UX Design Fundamentals",
    },
    {
      id: 3,
      method: "Bank Transfer",
      amount: "$199.99",
      date: "2025-10-10",
      status: "Completed",
      details: "Advanced Full Stack Program",
    },
    {
      id: 4,
      method: "Credit Card",
      amount: "$29.99",
      date: "2025-09-05",
      status: "Failed",
      details: "Angular & Node Full Stack",
    },
    {
      id: 5,
      method: "Credit Card",
      amount: "$59.99",
      date: "2025-08-22",
      status: "Completed",
      details: "React & Node Bootcamp",
    },
    {
      id: 6,
      method: "PayPal",
      amount: "$79.99",
      date: "2025-07-12",
      status: "Completed",
      details: "Python for Data Science",
    },
    {
      id: 7,
      method: "Bank Transfer",
      amount: "$149.99",
      date: "2025-06-30",
      status: "Pending",
      details: "Vue.js Fullstack",
    },
    {
      id: 8,
      method: "Credit Card",
      amount: "$39.99",
      date: "2025-05-25",
      status: "Completed",
      details: "Django Fullstack",
    },
    {
      id: 9,
      method: "PayPal",
      amount: "$89.99",
      date: "2025-04-15",
      status: "Failed",
      details: "Data Science & ML",
    },
    {
      id: 10,
      method: "Bank Transfer",
      amount: "$119.99",
      date: "2025-03-05",
      status: "Completed",
      details: "Cybersecurity Fundamentals",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [filterMethod, setFilterMethod] = useState<string | null>(null);

  const filteredPurchases = purchases.filter(
    (p) =>
      (filterStatus ? p.status === filterStatus : true) &&
      (filterMethod ? p.method === filterMethod : true)
  );

  const getMethodIcon = (method: Purchase["method"]) => {
    switch (method) {
      case "Credit Card":
        return <CreditCard className="w-5 h-5 text-indigo-600" />;
      case "PayPal":
        return <Wallet className="w-5 h-5 text-blue-600" />;
      case "Bank Transfer":
        return <DollarSign className="w-5 h-5 text-green-600" />;
    }
  };

  const getStatusBadgeVariant = (status: Purchase["status"]) => {
    switch (status) {
      case "Completed":
        return "default";
      case "Pending":
        return "secondary";
      case "Failed":
        return "destructive";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Purchase History
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Select
          onValueChange={(val) => setFilterStatus(val)}
          value={filterStatus || ""}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Failed">Failed</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(val) => setFilterMethod(val)}
          value={filterMethod || ""}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Credit Card">Credit Card</SelectItem>
            <SelectItem value="PayPal">PayPal</SelectItem>
            <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => {
            setFilterStatus(null);
            setFilterMethod(null);
          }}
        >
          Reset Filters
        </Button>
      </div>

      <ScrollArea className="rounded-xl border h-[600px] p-4">
        <div className="flex flex-col gap-4">
          {filteredPurchases.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
              No purchases found.
            </p>
          )}
          {filteredPurchases.map((purchase) => (
            <div
              key={purchase.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                {getMethodIcon(purchase.method)}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {purchase.details}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {purchase.method} • {purchase.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {purchase.amount}
                </span>
                <Badge variant={getStatusBadgeVariant(purchase.status)}>
                  {purchase.status}
                </Badge>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    toast(`Viewing details for ${purchase.details}`)
                  }
                >
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
