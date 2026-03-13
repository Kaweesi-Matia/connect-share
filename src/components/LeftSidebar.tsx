import { Users, Clock, Bookmark, Monitor, Store, CalendarDays, Flag, ChevronDown } from "lucide-react";

const menuItems = [
  { icon: null, label: "John Doe", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face" },
  { icon: Users, label: "Friends" },
  { icon: Clock, label: "Memories" },
  { icon: Bookmark, label: "Saved" },
  { icon: Users, label: "Groups" },
  { icon: Monitor, label: "Video" },
  { icon: Store, label: "Marketplace" },
  { icon: CalendarDays, label: "Events" },
  { icon: Flag, label: "Pages" },
];

const LeftSidebar = () => {
  return (
    <aside className="w-[280px] fixed left-0 top-14 bottom-0 overflow-y-auto p-2 hidden lg:block">
      <nav className="space-y-0.5">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-3 px-2 py-2 fb-hover text-sm font-medium"
          >
            {item.avatar ? (
              <img src={item.avatar} alt={item.label} className="fb-avatar w-9 h-9" />
            ) : item.icon ? (
              <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
            ) : null}
            <span>{item.label}</span>
          </button>
        ))}
        <button className="w-full flex items-center gap-3 px-2 py-2 fb-hover text-sm font-medium">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <ChevronDown className="w-5 h-5 text-foreground" />
          </div>
          <span>See more</span>
        </button>
      </nav>

      <div className="fb-separator my-3" />

      <div className="px-2">
        <h3 className="text-muted-foreground font-semibold text-sm mb-2">Your shortcuts</h3>
        <div className="space-y-0.5">
          {["React Developers", "Design Community", "Music Lovers"].map((group) => (
            <button key={group} className="w-full flex items-center gap-3 px-2 py-2 fb-hover text-sm font-medium">
              <div className="w-9 h-9 rounded-lg bg-muted" />
              <span>{group}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
