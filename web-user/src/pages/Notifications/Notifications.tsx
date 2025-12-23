// src/pages/Notifications.tsx
import { useState } from "react";
import NotificationFilter from "./NotificationFilter";
import NotificationHeader from "./NotificationHeader";
import NotificationList from "./NotificationList";

export default function Notifications() {
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Course Available: React Mastery",
      description: "Enroll now and improve your React skills.",
      read: false,
      time: "2h ago",
      date: "2025-12-23", // add this
    },
    {
      id: 2,
      title: "Assignment Deadline Reminder",
      description: "Your Next.js project is due tomorrow.",
      read: true,
      time: "1d ago",
      date: "2025-12-22",
    },
    {
      id: 3,
      title: "Congratulations!",
      description: "You completed the Python Bootcamp.",
      read: false,
      time: "3d ago",
      date: "2025-12-20",
    },
    {
      id: 4,
      title: "Weekly Digest",
      description: "See what’s new on INFINIOED this week.",
      read: true,
      time: "5d ago",
      date: "2025-12-18",
    },
    {
      id: 5,
      title: "UI/UX Design Workshop",
      description: "Join our live UI/UX workshop this weekend.",
      read: false,
      time: "6h ago",
      date: "2025-12-23",
    },
    {
      id: 6,
      title: "System Maintenance",
      description: "Scheduled maintenance on Dec 28, 2AM-4AM UTC.",
      read: true,
      time: "2d ago",
      date: "2025-12-21",
    },
    {
      id: 7,
      title: "Feedback Request",
      description: "Please provide feedback on your latest course.",
      read: false,
      time: "12h ago",
      date: "2025-12-23",
    },
    {
      id: 8,
      title: "New Achievement Unlocked",
      description: "You earned the 'Frontend Hero' badge.",
      read: false,
      time: "1d ago",
      date: "2025-12-22",
    },
  ]);

  // Filter notifications
  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((n) => (filter === "unread" ? !n.read : n.read));

  // Toggle read/unread status
  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => {
        if (n.id === id) {
          return { ...n, read: !n.read };
        }
        return n;
      })
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <NotificationHeader />
      <NotificationFilter filter={filter} setFilter={setFilter} />
      <NotificationList
        notifications={filteredNotifications}
        onToggleRead={toggleRead}
      />
    </div>
  );
}
