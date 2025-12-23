// src/pages/components/NotificationList.tsx
import { type FC } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: number;
  title: string;
  description: string;
  read: boolean;
  time: string;
  date: string; // e.g., "2025-12-23"
}

interface NotificationListProps {
  notifications: Notification[];
  onToggleRead: (id: number) => void;
}

const NotificationList: FC<NotificationListProps> = ({
  notifications,
  onToggleRead,
}) => {
  // Group notifications by date
  const grouped = notifications.reduce<Record<string, Notification[]>>(
    (acc, n) => {
      if (!acc[n.date]) acc[n.date] = [];
      acc[n.date].push(n);
      return acc;
    },
    {}
  );

  return (
    <ScrollArea className="h-[600px] rounded-xl border p-4">
      {Object.keys(grouped).length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No notifications to show.
        </p>
      )}

      {Object.entries(grouped).map(([date, items]) => (
        <div key={date} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {date}
          </h3>
          <div className="space-y-4">
            {items.map((n) => (
              <div
                key={n.id}
                className={`flex items-start gap-4 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent ${
                  n.read
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-600"
                }`}
              >
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      n.read
                        ? "bg-gray-400 dark:bg-gray-500"
                        : "bg-indigo-600 animate-pulse"
                    }`}
                  />
                  <div className="flex-1 w-px bg-gray-200 dark:bg-gray-700 mt-1" />
                </div>

                {/* Icon and content */}
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell
                        className={`w-5 h-5 ${
                          n.read
                            ? "text-gray-500 dark:text-gray-400"
                            : "text-indigo-600"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          n.read
                            ? "text-gray-900 dark:text-white"
                            : "text-indigo-900 dark:text-white"
                        }`}
                      >
                        {n.title}
                      </span>
                    </div>
                    {!n.read && <Badge variant="default">New</Badge>}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {n.description}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs">
                    {n.time}
                  </p>
                </div>

                {/* Action button */}
                <div className="flex-shrink-0 mt-1">
                  <Button
                    size="sm"
                    variant={n.read ? "outline" : "default"}
                    onClick={() => onToggleRead(n.id)}
                  >
                    Mark as {n.read ? "Unread" : "Read"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </ScrollArea>
  );
};

export default NotificationList;
