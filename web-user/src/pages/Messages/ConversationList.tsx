import { type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Conversation {
  id: number;
  name: string;
  avatar?: string;
  lastMessage: string;
  unread: boolean;
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const ConversationList: FC<ConversationListProps> = ({
  conversations,
  selectedId,
  onSelect,
}) => (
  <div className="flex flex-col overflow-y-auto h-full space-y-2 p-3">
    {conversations.map((c) => (
      <div
        key={c.id}
        onClick={() => onSelect(c.id)}
        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
          selectedId === c.id
            ? "bg-indigo-100 dark:bg-indigo-900"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Avatar className="w-10 h-10">
          {c.avatar ? (
            <AvatarImage src={c.avatar} />
          ) : (
            <AvatarFallback>{c.name[0]}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1 flex flex-col">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {c.name}
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm truncate">
            {c.lastMessage}
          </p>
        </div>
        {c.unread && (
          <Badge variant="destructive" className="ml-auto">
            New
          </Badge>
        )}
      </div>
    ))}
  </div>
);

export default ConversationList;
