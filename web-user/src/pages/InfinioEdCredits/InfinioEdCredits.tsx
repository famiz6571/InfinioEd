// src/pages/InfinioEdCredits/InfinioEdCredits.tsx
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CreditTransaction {
  id: number;
  date: string;
  amount: number;
  type: "Purchase" | "Reward" | "Adjustment";
  description: string;
}

export default function InfinioEdCredits() {
  const [credits] = useState(125);
  const [filter, setFilter] = useState<CreditTransaction["type"] | "All">(
    "All"
  );
  const [search, setSearch] = useState("");

  const [transactions] = useState<CreditTransaction[]>([
    {
      id: 1,
      date: "2025-12-20",
      amount: 50,
      type: "Purchase",
      description: "Bought Full Stack Course",
    },
    {
      id: 2,
      date: "2025-12-18",
      amount: 25,
      type: "Reward",
      description: "Referral Bonus",
    },
    {
      id: 3,
      date: "2025-12-15",
      amount: 100,
      type: "Purchase",
      description: "Advanced Full Stack Program",
    },
    {
      id: 4,
      date: "2025-12-10",
      amount: 15,
      type: "Adjustment",
      description: "Manual Credit Adjustment",
    },
    {
      id: 5,
      date: "2025-12-05",
      amount: 75,
      type: "Purchase",
      description: "UI/UX Design Course",
    },
    {
      id: 6,
      date: "2025-12-03",
      amount: 20,
      type: "Reward",
      description: "Bonus Credit",
    },
    {
      id: 7,
      date: "2025-12-01",
      amount: 30,
      type: "Purchase",
      description: "Python & Django Course",
    },
    {
      id: 8,
      date: "2025-11-28",
      amount: 10,
      type: "Adjustment",
      description: "System Adjustment",
    },
    {
      id: 9,
      date: "2025-11-25",
      amount: 50,
      type: "Purchase",
      description: "Data Science Course",
    },
    {
      id: 10,
      date: "2025-11-22",
      amount: 40,
      type: "Reward",
      description: "Referral Bonus",
    },
  ]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      const matchesFilter = filter === "All" || tx.type === filter;
      const matchesSearch = tx.description
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [transactions, filter, search]);

  const typeColor = (type: CreditTransaction["type"]) => {
    switch (type) {
      case "Purchase":
        return "bg-red-500";
      case "Reward":
        return "bg-green-500";
      case "Adjustment":
        return "bg-yellow-500";
    }
  };

  const totalReward = transactions
    .filter((t) => t.type === "Reward")
    .reduce((a, b) => a + b.amount, 0);
  const totalPurchase = transactions
    .filter((t) => t.type === "Purchase")
    .reduce((a, b) => a + b.amount, 0);
  const totalAdjustment = transactions
    .filter((t) => t.type === "Adjustment")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          InfinioEd Credits
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your available credits and transaction history
        </p>
      </div>

      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Credits */}
        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-8 flex flex-col items-center justify-center shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-6xl font-bold text-white">{credits}</span>
          <span className="text-white mt-2">Total Credits</span>
        </motion.div>

        {/* Credits Breakdown */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.03 }}
        >
          <h2 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
            Credits Breakdown
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Purchases</span>
              <span className="text-red-500 font-semibold">
                {totalPurchase}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Rewards</span>
              <span className="text-green-500 font-semibold">
                {totalReward}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Adjustments</span>
              <span className="text-yellow-500 font-semibold">
                {totalAdjustment}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Add Credits Button */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-center items-center shadow hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.03 }}
        >
          <PlusCircle className="w-12 h-12 text-indigo-500 mb-2" />
          <Button>Add Credits</Button>
        </motion.div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          {["All", "Purchase", "Reward", "Adjustment"].map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f as any)}
            >
              {f}
            </Button>
          ))}
        </div>
        <Input
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      {/* Transactions Timeline */}
      <ScrollArea className="h-[500px] rounded-xl border p-4">
        <div className="relative">
          <div className="absolute top-0 left-5 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>
          <div className="space-y-8">
            {filteredTransactions.map((tx) => (
              <motion.div
                key={tx.id}
                className="flex items-start space-x-6 relative"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`w-4 h-4 mt-1 rounded-full ${typeColor(
                    tx.type
                  )} flex-shrink-0`}
                ></div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow w-full">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {tx.description}
                    </span>
                    <span
                      className={`font-bold ${
                        tx.type === "Purchase"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {tx.type === "Purchase"
                        ? `-${tx.amount}`
                        : `+${tx.amount}`}{" "}
                      Credits
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tx.date}
                  </p>
                  <Badge variant="outline" className="mt-2">
                    {tx.type}
                  </Badge>
                </div>
              </motion.div>
            ))}
            {filteredTransactions.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No transactions found.
              </p>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
