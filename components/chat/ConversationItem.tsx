"use client";

import { Conversation } from "@/types/chat";

type ConversationItemProps = {
  conversation: Conversation;
  selected: boolean;
  onClick: () => void;
};

export function ConversationItem({
    conversation,
    selected,
    onClick,
  }: ConversationItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 px-3 py-3 text-left transition ${
        selected
          ? "bg-zinc-100"
          : "hover:bg-zinc-50"
      }`}
      aria-current={selected ? "true" : undefined}
    >
      <div className="relative shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 font-semibold text-zinc-700">
          {conversation.initials}
        </div>

        {conversation.online === true && (
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-semibold text-zinc-900">
            {conversation.name}
          </p>

          <span className="shrink-0 text-xs text-zinc-400">
            {conversation.time}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate text-sm text-zinc-500">
            {conversation.lastMessage}
          </p>

          {conversation.unreadCount > 0 && (
            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}