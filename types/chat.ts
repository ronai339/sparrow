export type Conversation = {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  online: boolean;
};

export type Message = {
  id: string;
  sender: "me" | "other";
  text: string;
  time: string;
};