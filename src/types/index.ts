export interface User {
  id: string;
  name: string;
  status: "online" | "offline";
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

export interface LoginFormProps {
  onSubmit: (userNumber: string) => void;
  isLoading?: boolean;
}
