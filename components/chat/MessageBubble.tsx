type MessageBubbleProps = {
  text: string;
  sender: "me" | "other";
};

export function MessageBubble({
  text,
  sender,
}: MessageBubbleProps) {
  const isMine = sender === "me";

  return (
    <div
      className={`flex ${isMine ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          isMine
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {text}
      </div>
    </div>
  );
}