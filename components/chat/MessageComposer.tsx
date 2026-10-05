import { Paperclip, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function MessageComposer(){
  return (
    <form className="flex items-center gap-2 border-t p-4">
    <button type="button">
        <Paperclip />
    </button>

    <Input
        placeholder="Type a message..."
    />

    <Button type="submit">
        <Send />
    </Button>
    </form>
  )
}