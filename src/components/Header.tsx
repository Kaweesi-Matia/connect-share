import { Search, Home, Users, MonitorPlay, Store, Bell, MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: Home },
    { id: "friends", icon: Users },
    { id: "watch", icon: MonitorPlay },
    { id: "marketplace", icon: Store },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-sm border-b border-border h-14 flex items-center px-4">
      {/* Left - Logo & Search */}
      <div className="flex items-center gap-2 w-[280px]">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
          f
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-muted rounded-full pl-10 pr-4 py-2 text-sm w-[220px] outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Center - Navigation */}
      <nav className="flex-1 flex justify-center">
        <div className="flex gap-2">
          {navItems.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-8 py-2.5 rounded-lg transition-colors relative ${
                activeTab === id
                  ? "text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-6 h-6" />
              {activeTab === id && (
                <div className="absolute bottom-0 left-2 right-2 h-[3px] bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Right - Actions */}
      <div className="flex items-center gap-2 w-[280px] justify-end">
        <button className="fb-icon-btn md:hidden">
          <Search className="w-5 h-5 text-foreground" />
        </button>
        <button className="fb-icon-btn">
          <Menu className="w-5 h-5 text-foreground" />
        </button>
        <button className="fb-icon-btn relative">
          <MessageCircle className="w-5 h-5 text-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-fb-red text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        <button className="fb-icon-btn relative">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-fb-red text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
            5
          </span>
        </button>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
          alt="Profile"
          className="fb-avatar w-9 h-9 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
