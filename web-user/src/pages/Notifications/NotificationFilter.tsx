// src/pages/components/NotificationFilter.tsx
import { type FC } from "react";
import { Button } from "@/components/ui/button";

interface NotificationFilterProps {
  filter: "all" | "unread" | "read";
  setFilter: (value: "all" | "unread" | "read") => void;
}

const NotificationFilter: FC<NotificationFilterProps> = ({
  filter,
  setFilter,
}) => (
  <div className="flex justify-center gap-4">
    {(["all", "unread", "read"] as const).map((f) => (
      <Button
        key={f}
        variant={filter === f ? "default" : "outline"}
        onClick={() => setFilter(f)}
        className="capitalize"
      >
        {f}
      </Button>
    ))}
  </div>
);

export default NotificationFilter;
