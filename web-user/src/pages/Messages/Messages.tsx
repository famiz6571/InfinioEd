// src/pages/Messages.tsx
import { useState } from "react";
import ConversationList from "./ConversationList";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  unread: boolean;
}

interface Message {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
}

export default function Messages() {
  const [conversations] = useState<Conversation[]>([
    { id: 1, name: "John Doe", lastMessage: "See you tomorrow!", unread: true },
    { id: 2, name: "Jane Smith", lastMessage: "Thanks!", unread: false },
    {
      id: 3,
      name: "Mike Johnson",
      lastMessage: "Let's start the project",
      unread: true,
    },
  ]);

  const [selectedId, setSelectedId] = useState<number | null>(1);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "other",
      text: "Hey, are you free tomorrow?",
      time: "10:00 AM",
    },
    { id: 2, sender: "me", text: "Yes, what’s up?", time: "10:02 AM" },
    {
      id: 3,
      sender: "other",
      text: "Let's meet for project discussion.",
      time: "10:05 AM",
    },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "me",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6 h-[80vh]">
      {/* Conversation List */}
      <div className="w-full md:w-1/3 bg-white/10 dark:bg-gray-800 rounded-2xl shadow-md flex flex-col">
        <ConversationList
          conversations={conversations}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <ChatWindow messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}
