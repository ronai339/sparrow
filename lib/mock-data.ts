import { Conversation, Message } from "@/types/chat";

export const conversations: Conversation[] = [
  {
    id: "1",
    name: "Alex",
    initials: "A",
    online: true,
    lastMessage: "Sure 😄",
    time: "10:40",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Sarah",
    initials: "S",
    online: false,
    lastMessage: "Thanks!",
    time: "09:31",
    unreadCount: 0,
  },
  {
    id: "3",
    name: "Mike",
    initials: "M",
    online: true,
    lastMessage: "See you later.",
    time: "Yesterday",
    unreadCount: 0,
  },
  {
    id: "4",
    name: "Emma",
    initials: "E",
    online: false,
    lastMessage: "That sounds good!",
    time: "Yesterday",
    unreadCount: 1,
  },
  {
    id: "5",
    name: "Project Team",
    initials: "PT",
    online: true,
    lastMessage: "John: I'll push the changes tonight.",
    time: "Sun",
    unreadCount: 4,
  },
];

export const messagesByConversation: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      sender: "other",
      text: "Hey! How's it going?",
      time: "10:38",
    },
    {
      id: "2",
      sender: "me",
      text: "Pretty good! Just working on my chat app.",
      time: "10:39",
    },
    {
      id: "3",
      sender: "other",
      text: "Oh nice! Is it going well?",
      time: "10:39",
    },
    {
      id: "4",
      sender: "me",
      text: "Yeah, actually. I'm finally getting the UI together.",
      time: "10:39",
    },
    {
      id: "5",
      sender: "other",
      text: "Want to play later?",
      time: "10:40",
    },
    {
      id: "6",
      sender: "me",
      text: "Sure 😄",
      time: "10:40",
    },
  ],

  "2": [
    {
      id: "7",
      sender: "other",
      text: "Thanks for sending that over!",
      time: "09:30",
    },
    {
      id: "8",
      sender: "me",
      text: "No problem!",
      time: "09:31",
    },
    {
      id: "9",
      sender: "other",
      text: "Thanks!",
      time: "09:31",
    },
  ],

  "3": [
    {
      id: "10",
      sender: "me",
      text: "Are we still meeting tomorrow?",
      time: "18:22",
    },
    {
      id: "11",
      sender: "other",
      text: "Yep, same place as last time.",
      time: "18:24",
    },
    {
      id: "12",
      sender: "me",
      text: "Perfect.",
      time: "18:25",
    },
    {
      id: "13",
      sender: "other",
      text: "See you later.",
      time: "18:25",
    },
  ],

  "4": [
    {
      id: "14",
      sender: "other",
      text: "I've got an idea for the weekend.",
      time: "16:12",
    },
    {
      id: "15",
      sender: "me",
      text: "I'm listening.",
      time: "16:13",
    },
    {
      id: "16",
      sender: "other",
      text: "That sounds good!",
      time: "16:15",
    },
  ],

  "5": [
    {
      id: "17",
      sender: "other",
      text: "Has everyone reviewed the latest version?",
      time: "14:05",
    },
    {
      id: "18",
      sender: "me",
      text: "I've looked through it.",
      time: "14:07",
    },
    {
      id: "19",
      sender: "other",
      text: "Looks good to me.",
      time: "14:10",
    },
    {
      id: "20",
      sender: "me",
      text: "Same here.",
      time: "14:12",
    },
    {
      id: "21",
      sender: "other",
      text: "John: I'll push the changes tonight.",
      time: "14:13",
    },
  ],
};