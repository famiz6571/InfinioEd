// src/pages/components/NotificationList.tsx
import { type FC } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: number;
  title: string;
  description: string;
  read: boolean;
  time: string;
}

interface NotificationListProps {
  notifications: Notification[];
  onToggleRead: (id: number) => void;
}

const NotificationList: FC<NotificationListProps> = ({
  notifications,
  onToggleRead,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {notifications.map((n) => (
      <div
        key={n.id}
        className={`flex flex-col p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
          n.read
            ? "bg-white/10 dark:bg-white/5"
            : "bg-indigo-50 dark:bg-indigo-900/50"
        }`}
      >
        <div className="flex items-start">
          <Bell className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1" />
          <div className="flex-1">
            <h4
              className={`text-lg font-semibold ${
                n.read
                  ? "text-gray-900 dark:text-white"
                  : "text-indigo-900 dark:text-white"
              }`}
            >
              {n.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {n.description}
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
              {n.time}
            </p>
          </div>
        </div>
        <Button
          onClick={() => onToggleRead(n.id)}
          variant={n.read ? "outline" : "default"}
          size="sm"
          className="mt-3 self-start"
        >
          Mark as {n.read ? "Unread" : "Read"}
        </Button>
      </div>
    ))}
    {notifications.length === 0 && (
      <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
        No notifications to show.
      </p>
    )}
  </div>
);

export default NotificationList;
