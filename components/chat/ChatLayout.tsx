"use client";

import { useMemo, useState } from "react";
import { ChatWindow } from "./ChatWindow"; // chat window component
import { ConversationList } from "./ConversationList"; // sidebar on the left with the list of conversations
import {
  conversations as initialConversations,
  messagesByConversation as initialMessages, } from "@/lib/mock-data"; // dummy data for testing the chat layout
import { Conversation, Message } from "@/types/chat"; // types for the conversation and message objects


export function ChatLayout() {
  // State to manage the list of conversations
  const [conversations, setConversations] = useState(initialConversations);

  // State to manage the messages for each conversation, stored in a record with conversation IDs as keys
  const [messagesByConversation, setMessagesByConversation] =
    useState<Record<string, Message[]>>(initialMessages);

  // State to manage the currently selected conversation ID
  const [selectedConversationId, setSelectedConversationId] = useState("1");

  // State to manage the search input for filtering conversations
  const [search, setSearch] = useState("");

  // State to manage the mobile view, either showing the conversation list or the chat window
  const [mobileView, setMobileView] = useState< "list" | "chat" >("list");

  // Memoized value to filter conversations based on the search input
  const filteredConversations = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) { return conversations; }
    return conversations.filter((conversation) =>
      `${conversation.name} ${conversation.lastMessage}`
        .toLowerCase()
        .includes(query)
    );
  }, [conversations, search]);

  // Find the selected conversation object based on the selectedConversationId
  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedConversationId
  ) as Conversation;

  // Get the messages for the selected conversation, defaulting to an empty array if none exist
  const selectedMessages = messagesByConversation[selectedConversationId] ?? [];


  // Function to handle selecting a conversation from the list
  function handleSelectConversation(id: string) {
    setSelectedConversationId(id);
    setMobileView("chat");
    setConversations((current) => current.map((conversation) =>
      conversation.id === id ? { ...conversation, unreadCount: 0 } : conversation
    ));
  }

  // Function to handle sending a new message
  function handleSendMessage(text: string) {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: "me",
      text,
      time: "now",
    };

    // Update the messages for the selected conversation
    setMessagesByConversation((current) => ({ ...current,
      [selectedConversationId]: [ ...(current[selectedConversationId] ?? []), newMessage, ],
    }));

    // Update the last message and time for the selected conversation
    setConversations((current) => current.map((conversation) => 
      conversation.id === selectedConversationId ? { ...conversation, lastMessage: text, time: "now", } : conversation)
    );
  }

  // Render the chat layout with the conversation list and chat window
  return (
    <main className="min-h-screen bg-zinc-100 md:p-4">
      <div className="mx-auto h-screen max-w -[1400px] overflow-hidden bg-white md:h-[calc(100vh-2rem)] md:rounded-2xl md:shadow-xl">
        <div className="flex h-full">

          {/* Render the conversation list and chat window based on the mobile view state */}
          <div className={ mobileView === "chat" ? "hidden md:flex" : "flex"}>
            <ConversationList
              conversations={filteredConversations}
              selectedConversationId={selectedConversationId}
              search={search}
              onSearchChange={setSearch}
              onSelectConversation={handleSelectConversation}
            />
          </div>

          {/*Render the chat window, which is hidden on mobile when the conversation list is visible*/}
          <div className={ mobileView === "list" ? "hidden md:flex md:flex-1" : "flex flex-1" }>
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