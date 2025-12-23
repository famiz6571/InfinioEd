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
  date: string; // "2025-12-23"
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
    <ScrollArea className="h-[70vh] sm:h-[600px] w-full max-w-full overflow-x-hidden rounded-xl border p-3 sm:p-4">
      {Object.keys(grouped).length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No notifications to show.
        </p>
      )}

      {Object.entries(grouped).map(([date, items]) => (
        <div key={date} className="mb-6 w-full max-w-full">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {date}
          </h3>

          <div className="space-y-3 sm:space-y-4 w-full max-w-full">
            {items.map((n) => (
              <div
                key={n.id}
                className={`w-full max-w-full overflow-hidden flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 rounded-xl transition-all duration-300 border ${
                  n.read
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-600"
                }`}
              >
                {/* Timeline (hidden on mobile) */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      n.read
                        ? "bg-gray-400 dark:bg-gray-500"
                        : "bg-indigo-600 animate-pulse"
                    }`}
                  />
                  <div className="flex-1 w-px bg-gray-200 dark:bg-gray-700 mt-1" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex items-start justify-between gap-2 min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <Bell
                        className={`w-5 h-5 flex-shrink-0 ${
                          n.read
                            ? "text-gray-500 dark:text-gray-400"
                            : "text-indigo-600"
                        }`}
                      />
                      <span
                        className={`font-medium break-words ${
                          n.read
                            ? "text-gray-900 dark:text-white"
                            : "text-indigo-900 dark:text-white"
                        }`}
                      >
                        {n.title}
                      </span>
                    </div>
                    {!n.read && <Badge className="flex-shrink-0">New</Badge>}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm break-words">
                    {n.description}
                  </p>

                  <p className="text-gray-400 dark:text-gray-500 text-xs">
                    {n.time}
                  </p>
                </div>

                {/* Action button */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <Button
                    size="sm"
                    className="w-full sm:w-auto"
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
