import { type FC } from "react";
import { Card, CardTitle } from "@/components/ui/card";

interface Stat {
  icon: FC<any>;
  label: string;
  value: number;
}

interface StatsCardProps {
  stats: Stat[];
}

const StatsCard: FC<StatsCardProps> = ({ stats }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {stats.map((s, idx) => (
      <Card
        key={idx}
        className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
      >
        {/* Icon with background circle */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-3">
          <s.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
        </div>

        {/* Value */}
        <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
          {s.value}
        </CardTitle>

        {/* Label */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
          {s.label}
        </p>
      </Card>
    ))}
  </div>
);

export default StatsCard;
