import React from "react";
import Input from "./Input";
import Button from "./Button";

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onSend,
  disabled = false,
  placeholder = "Type a message...",
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex gap-2 p-4 border-t border-gray-200 bg-white">
      <div className="flex-1" onKeyDown={handleKeyPress}>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="rounded-full"
        />
      </div>
      <Button
        onClick={onSend}
        disabled={disabled || !value.trim()}
        className="rounded-full px-6 cursor-pointer"
      >
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
