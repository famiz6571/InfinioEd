import { useState, useEffect, useRef } from "react";
import ConversationList from "./ConversationList";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
import { toast } from "react-hot-toast";

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  unread: boolean;
  avatar?: string;
  online: boolean;
}

interface Message {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
  date: string;
}

export default function Messages() {
  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "See you tomorrow!",
      unread: true,
      online: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Thanks!",
      unread: false,
      online: false,
    },
    {
      id: 3,
      name: "Mike Johnson",
      lastMessage: "Let's start the project",
      unread: true,
      online: true,
    },
  ]);

  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [search, setSearch] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "other",
      text: "Hey, are you free tomorrow?",
      time: "10:00 AM",
      date: "2025-12-22",
    },
    {
      id: 2,
      sender: "me",
      text: "Yes, what’s up?",
      time: "10:02 AM",
      date: "2025-12-22",
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Real-time simulated messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomTexts = [
        "Hello! How are you?",
        "Did you check the latest update?",
        "Let's meet at 5 PM.",
        "Have you completed the task?",
        "Good morning!",
      ];
      const randomText =
        randomTexts[Math.floor(Math.random() * randomTexts.length)];
      const today = new Date().toISOString().split("T")[0];

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "other",
          text: randomText,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          date: today,
        },
      ]);

      // Push notification
      toast.success("New message received!");
    }, 20000); // every 20s

    return () => clearInterval(interval);
  }, []);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const today = new Date().toISOString().split("T")[0];
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
        date: today,
      },
    ]);
  };

  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto h-[80vh] gap-6 p-6">
      {/* Conversations List */}
      <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex flex-col overflow-hidden">
        <div className="p-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <ConversationList
          conversations={filteredConversations}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
        <ChatWindow messages={messages} chatEndRef={chatEndRef} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}
