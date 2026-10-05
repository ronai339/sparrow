"use client";

import { Conversation } from "@/types/chat";

type ConversationItemProps = {
  name: string;
  lastMessage: string
};

export function ConversationItem({
    name,
    lastMessage
  }: ConversationItemProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
        <div className="border-b p-2">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{lastMessage}</p>
        </div>
    </div>
  )
}