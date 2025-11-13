import React from "react";
import { Message, User } from "@/src/types";

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
  sender?: User;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isCurrentUser,
  sender,
}) => {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className={`max-w-[70%] ${isCurrentUser ? "order-2" : "order-1"}`}>
        {!isCurrentUser && sender && (
          <div className="text-sm text-gray-600 mb-1 ml-1">{sender.name}</div>
        )}
        <div
          className={`relative px-4 py-3 rounded-2xl ${
            isCurrentUser
              ? "bg-primary text-white rounded-br-none"
              : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
          }`}
        >
          <p className="text-sm pr-14">{message.content}</p>
          <span
            className={`absolute bottom-1 right-2 text-xs opacity-70 ${
              isCurrentUser ? "text-white" : "text-gray-500"
            }`}
          >
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
