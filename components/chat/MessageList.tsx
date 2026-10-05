import { MessageBubble } from "./MessageBubble";


export function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <MessageBubble text={"me"} sender={"me"}/>
      <MessageBubble text={"you"} sender={"other"}/>
    </div>
  )
}