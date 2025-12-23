import { type FC, useState, useEffect } from "react";

interface Message {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
  date: string;
}

interface ChatWindowProps {
  messages: Message[];
  chatEndRef: React.RefObject<HTMLDivElement | null>; // allow null
}


const ChatWindow: FC<ChatWindowProps> = ({ messages, chatEndRef }) => {
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTyping(Math.random() < 0.2); // simulate typing randomly
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  let lastDate = "";

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg) => {
        const showDate = msg.date !== lastDate;
        lastDate = msg.date;

        return (
          <div key={msg.id}>
            {showDate && (
              <div className="text-center text-sm text-gray-400 dark:text-gray-500 my-2">
                {new Date(msg.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            )}
            <div
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl break-words ${
                  msg.sender === "me"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none"
                }`}
              >
                {msg.text}
                <span className="block text-xs mt-1 text-gray-500 dark:text-gray-300 text-right">
                  {msg.time}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      {typing && (
        <div className="flex justify-start space-x-2 items-center text-sm text-gray-500 dark:text-gray-300 mt-2 animate-pulse">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span>Typing...</span>
        </div>
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;
