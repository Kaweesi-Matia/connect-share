import { Search, MoreHorizontal } from "lucide-react";

const contacts = [
  { name: "Sarah Wilson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face", online: true },
  { name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", online: true },
  { name: "Emily Davis", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face", online: true },
  { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face", online: false },
  { name: "Lisa Park", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face", online: true },
  { name: "David Kim", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face", online: false },
  { name: "Anna Smith", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face", online: true },
];

const RightSidebar = () => {
  return (
    <aside className="w-[280px] fixed right-0 top-14 bottom-0 overflow-y-auto p-4 hidden xl:block">
      {/* Sponsored */}
      <div className="mb-4">
        <h3 className="text-muted-foreground font-semibold text-sm mb-3">Sponsored</h3>
        <div className="space-y-3">
          <div className="flex gap-3 fb-hover p-2">
            <div className="w-32 h-20 rounded-lg bg-muted flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Learn React Today</p>
              <p className="text-xs text-muted-foreground">reactcourse.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fb-separator my-3" />

      {/* Contacts */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-muted-foreground font-semibold text-sm">Contacts</h3>
        <div className="flex gap-1">
          <button className="fb-icon-btn w-7 h-7">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
          <button className="fb-icon-btn w-7 h-7">
            <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="space-y-0.5">
        {contacts.map((contact) => (
          <button key={contact.name} className="w-full flex items-center gap-3 px-2 py-1.5 fb-hover">
            <div className="relative">
              <img src={contact.avatar} alt={contact.name} className="fb-avatar w-8 h-8" />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-fb-green rounded-full border-2 border-card" />
              )}
            </div>
            <span className="text-sm font-medium">{contact.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
