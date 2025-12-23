import { type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
  avatar?: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: FC<ChatWindowProps> = ({ messages }) => (
  <div className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto bg-white/10 dark:bg-gray-800 rounded-2xl shadow-inner">
    {messages.map((m) => (
      <div
        key={m.id}
        className={`flex items-end gap-2 max-w-lg ${
          m.sender === "me" ? "ml-auto justify-end" : "mr-auto justify-start"
        }`}
      >
        {m.sender === "other" && (
          <Avatar className="w-8 h-8">
            {m.avatar ? (
              <AvatarImage src={m.avatar} />
            ) : (
              <AvatarFallback>O</AvatarFallback>
            )}
          </Avatar>
        )}
        <div
          className={`p-3 rounded-xl shadow-md ${
            m.sender === "me"
              ? "bg-indigo-600 text-white rounded-br-none"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none"
          }`}
        >
          <p>{m.text}</p>
          <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 block text-right">
            {m.time}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default ChatWindow;
