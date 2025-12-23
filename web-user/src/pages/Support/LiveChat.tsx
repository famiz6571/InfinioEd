import { type FC, useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const predefinedQA = [
  {
    question: "What are your support hours?",
    answer: "Our support hours are Monday – Friday, 9:00 AM – 6:00 PM.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "You can reset your password by clicking 'Forgot Password' on the login page.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Go to your account dashboard and click 'Orders' to track your order status.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer refunds within 30 days of purchase. Please contact support for details.",
  },
];

const LiveChat: FC = () => {
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = (msgText?: string) => {
    const text = msgText || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text }]);

    // Simulate bot response
    setTimeout(() => {
      const answerObj = predefinedQA.find(
        (qa) => qa.question.toLowerCase() === text.toLowerCase()
      );
      const botAnswer = answerObj
        ? answerObj.answer
        : "Thanks for your message! Our team will contact you soon.";
      setMessages((prev) => [...prev, { from: "bot", text: botAnswer }]);
    }, 500);

    setInput("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm">
          Start Chat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-full">
        <DialogHeader className="flex justify-between items-center">
          <DialogTitle>Live Chat</DialogTitle>
          <DialogClose asChild>
          </DialogClose>
        </DialogHeader>

        {/* Chat Messages */}
        <div
          ref={scrollRef}
          className="h-64 overflow-y-auto border rounded-md p-3 space-y-2 mb-3 bg-gray-50 dark:bg-gray-800"
        >
          {messages.length === 0 && (
            <p className="text-gray-500 text-sm">
              Select a question or type a message...
            </p>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md max-w-[80%] ${
                msg.from === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Quick Question Buttons */}
        <div className="flex flex-wrap gap-2 mb-2">
          {predefinedQA.map((qa) => (
            <Button
              key={qa.question}
              size="sm"
              variant="outline"
              onClick={() => sendMessage(qa.question)}
            >
              {qa.question}
            </Button>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button onClick={() => sendMessage()}>Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveChat;
