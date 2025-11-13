import { Message, User } from "@/src/types";

export const MOCK_USERS: User[] = [
  { id: "017", name: "Ramprosad", status: "online" },
  { id: "015", name: "Sajib", status: "online" },
  { id: "018", name: "Sohag", status: "online" },
  { id: "019", name: "Shanto", status: "offline" },
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: "1",
    senderId: "016",
    content: "Hello everyone! 👋",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "2",
    senderId: "017",
    content: "Hi there! How is everyone doing?",
    timestamp: new Date(Date.now() - 3500000).toISOString(),
  },
  {
    id: "3",
    senderId: "018",
    content: "Doing great! Working on some new features.",
    timestamp: new Date(Date.now() - 3400000).toISOString(),
  },
  {
    id: "4",
    senderId: "016",
    content: "That sounds exciting! 🚀",
    timestamp: new Date(Date.now() - 3300000).toISOString(),
  },
];
