import { type FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSend: (text: string) => void;
}

const MessageInput: FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-2 p-3  border-gray-300 dark:border-gray-600 rounded-b-xl">
      <Input
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1"
      />
      <Button
        onClick={handleSend}
        className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        Send <Send className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default MessageInput;
