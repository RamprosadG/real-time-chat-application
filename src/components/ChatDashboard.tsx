"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Message, User } from "@/src/types";
import { MOCK_USERS, MOCK_MESSAGES } from "@/src/utils/constants";
import MessageBubble from "./ui/MessageBubble";
import MessageInput from "./ui/MessageInput";

const ChatDashboard: React.FC = () => {
  const params = useParams();
  const currentUserId = params.id as string;

  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentUser = MOCK_USERS.find((user) => user.id === currentUserId) || {
    id: currentUserId,
    name: `User ${currentUserId}`,
    status: "online" as const,
  };

  const onlineUsers = MOCK_USERS.filter((user) => user.status === "online");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    setIsSending(true);

    const newMessageObj: Message = {
      id: `msg_${Date.now()}`,
      senderId: currentUserId,
      content: newMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    // Simulate sending delay
    setTimeout(() => {
      setMessages((prev) => [...prev, newMessageObj]);
      setNewMessage("");
      setIsSending(false);
    }, 300);
  };

  const getSender = (senderId: string): User | undefined => {
    return MOCK_USERS.find((user) => user.id === senderId);
  };

  return (
    <div className="h-screen flex flex-col bg-secondary">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Group Chat</h1>
            <p className="text-sm text-gray-600">
              {onlineUsers.length} users online
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-gray-600">
              You: {currentUser.name}
            </span>
          </div>
        </div>
      </header>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 messages-container">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isCurrentUser={message.senderId === currentUserId}
              sender={getSender(message.senderId)}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <MessageInput
        value={newMessage}
        onChange={setNewMessage}
        onSend={handleSendMessage}
        disabled={isSending}
        placeholder="Type your message..."
      />
    </div>
  );
};

export default ChatDashboard;
