"use client";

import { Search, Settings2 } from "lucide-react"; // Icons from the lucide-react library
import { Conversation } from "@/types/chat"; // Conversation type from the chat types file
import { ConversationItem } from "./ConversationItem"; // ConversationItem component to render individual conversations

type ConversationListProps = {
  conversations: Conversation[]; // An array of conversation objects to display in the list
  selectedConversationId: string; // The ID of the currently selected conversation
  search: string; // The current search input value for filtering conversations
  onSearchChange: (value: string) => void; // A callback function to handle changes in the search input
  onSelectConversation: (id: string) => void; // A callback function to handle selecting a conversation from the list
};

// Renders a list of conversations with a search input and user info
export function ConversationList({
  conversations,
  selectedConversationId,
  search,
  onSearchChange,
  onSelectConversation,
}: ConversationListProps) {

  // Render the conversation list component
  return (
    <aside className="flex h-full w-full flex-col border-r border-zinc-200 bg-white md:w-85 md:shrink-0">
      <div className="border-b border-zinc-200 p-4">
        
        {/* Header section with title and settings button */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-500">
              Messages
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-950">
              Chats
            </h1>
          </div>

          <button
            type="button"
            aria-label="Chat settings"
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            <Settings2 size={19} />
          </button>
        </div>

        {/* Search input for filtering conversations */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search conversations"
            className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-10 pr-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
          />
        </div>
      </div>

      {/* Render the list of conversations or a message if no conversations are found */}
      <div className="flex-1 overflow-y-auto py-2">
        {conversations.length > 0 ? (
          conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              selected={
                conversation.id === selectedConversationId
              }
              onClick={() =>
                onSelectConversation(conversation.id)
              }
            />
          ))
        ) : (
          // Render a message when no conversations are found
          <div className="px-6 py-10 text-center">
            <p className="text-sm font-medium text-zinc-700">
              No conversations found
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Try a different search.
            </p>
          </div>
        )}
      </div>

      {/* User info section at the bottom of the conversation list */}
      <div className="border-t border-zinc-200 p-3">
        <div className="flex items-center gap-3 rounded-xl px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
            ME
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-900">
              You
            </p>
            <p className="text-xs text-emerald-600">
              Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}