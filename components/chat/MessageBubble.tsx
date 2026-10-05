import { Check, CheckCheck } from "lucide-react";
import { Message } from "@/types/chat";

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isMine = message.sender === "me";

  return (
    <div
      className={`flex ${
        isMine ? "justify-end" : "justify-start"
      }`}
    >
      <div className="max-w-[75%]">
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-6 ${
            isMine
              ? "rounded-br-md bg-blue-600 text-white"
              : "rounded-bl-md bg-zinc-100 text-zinc-900"
          }`}
        >
          <p className="whitespace-pre-wrap">
            {message.text}
          </p>
        </div>

        <div
          className={`mt-1 flex items-center gap-1 text-[11px] text-zinc-400 ${
            isMine ? "justify-end" : "justify-start"
          }`}
        >
          <span>{message.time}</span>

          {isMine && (
            <CheckCheck
              size={13}
              className="text-blue-500"
            />
          )}
        </div>
      </div>
    </div>
  );
}