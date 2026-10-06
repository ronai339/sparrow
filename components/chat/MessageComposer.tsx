"use client";

import { Paperclip, Send, Smile } from "lucide-react"; // Icons from the lucide-react library
import { Input } from "../ui/input"; // Input component from the UI library
import { Button } from "../ui/button"; // Button component from the UI library
import { FormEvent, useState } from "react"; // React hooks for managing state and handling form events

type MessageComposerProps = {
  onSend: (text: string) => void; // A callback function to handle sending a new message with the provided text
};

// Renders the message composer component for composing and sending messages
export function MessageComposer({ onSend }: MessageComposerProps) {
  const [draft, setDraft] = useState("");

  // Function to handle form submission when the user sends a message
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) {
      return;
    }
    onSend(text);
    setDraft("");
  }

  // Render the message composer form with input and buttons
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t p-4">

        {/* Attach file button */}
        <button
          type="button"
          aria-label="Attach a file"
          className="rounded-xl p-2 text-zinc-500 transition hover:bg-white hover:text-zinc-900">
          <Paperclip size={19} />
        </button>


        <Input placeholder="Type a message..."/>

        {/* Emoji button (hidden on small screens) */}
        <button
           type="button"
           aria-label="Add emoji"
           className="hidden rounded-xl p-2 text-zinc-500 transition hover:bg-white hover:text-zinc-900 sm:block">
          <Smile size={19} />
        </button>

        {/* Send button */}
        <Button type="submit">
          <Send />
        </Button>
    </form>
  )
}