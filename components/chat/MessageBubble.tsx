import { Check, CheckCheck } from "lucide-react"; // Icons from the lucide-react library
import { Message } from "@/types/chat"; // Message type from the chat types file

type MessageBubbleProps = {
  message: Message; // The message object to display in the bubble
};

// Renders a single message bubble in the chat window
export function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isMine = message.sender === "me";

  // Render the message bubble with appropriate styling based on the sender
  return (
    <div className={`flex ${ isMine ? "justify-end" : "justify-start" }`} >
      <div className="max-w-[75%]">

        {/* Message text bubble with conditional styling for sender */}
        <div className={`rounded-2xl px-4 py-2.5 text-sm leading-6 ${
          isMine
            ? "rounded-br-md bg-blue-600 text-white"
            : "rounded-bl-md bg-zinc-100 text-zinc-900"
          }`}
        >
          <p className="whitespace-pre-wrap">
            {message.text}
          </p>
        </div>

        {/* Message time and read indicator */}
        <div className={`mt-1 flex items-center gap-1 text-[11px] text-zinc-400 ${
          isMine ? "justify-end" : "justify-start" }`}
        >
          <span>{message.time}</span>
          {isMine && ( <CheckCheck size={13} className="text-blue-500" /> )}
        </div>
        
      </div>
    </div>
  );
}