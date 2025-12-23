// src/pages/components/NotificationHeader.tsx
import { type FC } from "react";

const NotificationHeader: FC = () => (
  <div className="text-center space-y-2">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
      Notifications
    </h1>
    <p className="text-gray-600 dark:text-gray-300">
      Stay updated with the latest updates, reminders, and announcements.
    </p>
  </div>
);

export default NotificationHeader;
