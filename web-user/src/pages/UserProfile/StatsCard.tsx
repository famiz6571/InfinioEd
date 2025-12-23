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
        className="flex flex-col items-center justify-center p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300"
      >
        <s.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {s.value}
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-300">{s.label}</p>
      </Card>
    ))}
  </div>
);

export default StatsCard;
