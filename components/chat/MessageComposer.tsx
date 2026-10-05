"use client";

import { Paperclip, Send, Smile } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";

type MessageComposerProps = {
  onSend: (text: string) => void;
};

export function MessageComposer({ onSend }: MessageComposerProps) {
  const [draft, setDraft] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) {
      return;
    }
    onSend(text);
    setDraft("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t p-4">

        <button
          type="button"
          aria-label="Attach a file"
          className="rounded-xl p-2 text-zinc-500 transition hover:bg-white hover:text-zinc-900">
          <Paperclip size={19} />
        </button>

        <Input placeholder="Type a message..."/>

        <button
           type="button"
           aria-label="Add emoji"
           className="hidden rounded-xl p-2 text-zinc-500 transition hover:bg-white hover:text-zinc-900 sm:block">
          <Smile size={19} />
        </button>

        <Button type="submit">
          <Send />
        </Button>

    </form>
  )
}