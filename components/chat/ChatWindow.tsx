"use client";

import { ArrowLeft, MoreHorizontal, Phone, Video, } from "lucide-react"; // Icons from the lucide-react library
import { Conversation, Message } from "@/types/chat"; // Types for Conversation and Message from the chat types file
import { MessageBubble } from "./MessageBubble"; // MessageBubble component to render individual messages
import { MessageComposer } from "./MessageComposer"; // MessageComposer component to handle composing and sending messages

type ChatWindowProps = {
  conversation: Conversation; // The conversation object representing the current chat
  messages: Message[]; // An array of message objects for the current conversation
  onBack: () => void; // A callback function to handle the back button click event
  onSend: (text: string) => void; // A callback function to handle sending a new message with the provided text
};

// Renders the chat window for a selected conversation
export function ChatWindow({
  conversation,
  messages,
  onBack,
  onSend,
}: ChatWindowProps) {

  // Render the chat window component
  return (
    <section className="flex h-full min-w-0 flex-1 flex-col bg-white">
      
      {/* Header section*/}
      <header className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-3 py-3 md:px-5">
        <div className="flex min-w-0 items-center gap-3">

          {/* Back button for mobile view to return to the conversation list */}
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to conversations"
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 md:hidden"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Conversation avatar */}
          <div className="relative shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-sm font-semibold text-zinc-700">
              {conversation.initials}
            </div>
            {conversation.online === true && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
            )}
          </div>

          {/* Conversation name and status */}
          <div className="min-w-0">
            <h2 className="truncate font-semibold text-zinc-950">
              {conversation.name}
            </h2>
            <p className="text-xs text-zinc-500">
              {conversation.online === true
                ? "Active now"
                : "Offline"}
            </p>
          </div>
        </div>

        {/* Action buttons*/}
        <div className="flex items-center gap-1">

          {/* Voice call button, hidden on small screens */}
          <button
            type="button"
            aria-label="Start voice call"
            className="hidden rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 sm:block"
          >
            <Phone size={18} />
          </button>

          {/* Video call button, hidden on small screens */}
          <button
            type="button"
            aria-label="Start video call"
            className="hidden rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 sm:block"
          >
            <Video size={19} />
          </button>

          {/* More options button */}
          <button
            type="button"
            aria-label="More options"
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
      </header>

      {/* Messages section */}
      <div className="flex-1 overflow-y-auto bg-zinc-50 px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          <div className="pb-4 text-center">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-400 shadow-sm">
              Today
            </span>
          </div>
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
            />
          ))}
        </div>
      </div>

      {/* Message composer section */}
      <MessageComposer onSend={onSend} />
    </section>
  );
}