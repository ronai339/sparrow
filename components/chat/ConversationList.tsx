"use client";

import { ConversationItem } from "./ConversationItem";

export function ConversationList() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <ConversationItem name={"John Doe"} lastMessage={"Hello!"} />
      <ConversationItem name={"Jane Smith"} lastMessage={"Hi there!"} />
    </div>
  )
}