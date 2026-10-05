"use client";

import { useMemo, useState } from "react";
import { ChatWindow } from "./ChatWindow";
import { ConversationList } from "./ConversationList";
import {
  conversations as initialConversations,
  messagesByConversation as initialMessages, } from "@/lib/mock-data";
import { Conversation, Message } from "@/types/chat";


export function ChatLayout() {
  const [conversations, setConversations] = useState(
    initialConversations
  );

  const [messagesByConversation, setMessagesByConversation] =
    useState<Record<string, Message[]>>(initialMessages);

  const [selectedConversationId, setSelectedConversationId] =
    useState("1");

  const [search, setSearch] = useState("");

  const [mobileView, setMobileView] = useState< "list" | "chat" >("list");

  const filteredConversations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return conversations;
    }

    return conversations.filter((conversation) =>
      `${conversation.name} ${conversation.lastMessage}`
        .toLowerCase()
        .includes(query)
    );
  }, [conversations, search]);

  const selectedConversation = conversations.find(
    (conversation) =>
      conversation.id === selectedConversationId
  ) as Conversation;

  const selectedMessages =
    messagesByConversation[selectedConversationId] ?? [];

  function handleSelectConversation(id: string) {
    setSelectedConversationId(id);
    setMobileView("chat");

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === id
          ? { ...conversation, unreadCount: 0 }
          : conversation
      )
    );
  }

  function handleSendMessage(text: string) {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: "me",
      text,
      time: "now",
    };

    setMessagesByConversation((current) => ({
      ...current,
      [selectedConversationId]: [
        ...(current[selectedConversationId] ?? []),
        newMessage,
      ],
    }));

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === selectedConversationId
          ? {
              ...conversation,
              lastMessage: text,
              time: "now",
            }
          : conversation
      )
    );
  }
  return (
    <main className="min-h-screen bg-zinc-100 md:p-4">
      <div className="mx-auto h-screen max-w -[1400px] overflow-hidden bg-white md:h-[calc(100vh-2rem)] md:rounded-2xl md:shadow-xl">
        <div className="flex h-full">
          <div
            className={
              mobileView === "chat"
                ? "hidden md:flex"
                : "flex"
            }
          >
            <ConversationList
              conversations={filteredConversations}
              selectedConversationId={selectedConversationId}
              search={search}
              onSearchChange={setSearch}
              onSelectConversation={handleSelectConversation}
            />
          </div>

          <div
            className={
              mobileView === "list"
                ? "hidden md:flex md:flex-1"
                : "flex flex-1"
            }
          >
            <ChatWindow
              conversation={selectedConversation}
              messages={selectedMessages}
              onBack={() => setMobileView("list")}
              onSend={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}