import { ChatHeader } from "./ChatHeader";
import { ConversationList } from "./ConversationList";
import { MessageComposer } from "./MessageComposer";
import { MessageList } from "./MessageList";
import { Searchbar } from "./Searchbar";
import { SidebarHeader } from "./SidebarHeader";

export function ChatLayout() {
  return (
    <main className="h-screen overflow-hidden">
      <div className="flex h-full">
        <aside className = "w-80 border-r">
          <SidebarHeader/>
          <Searchbar/>
          <ConversationList/>
        </aside>
        <section className="flex-1">
          <ChatHeader/>
          <MessageList/>
          <MessageComposer/>
        </section>
      </div>
    </main>
    );
}