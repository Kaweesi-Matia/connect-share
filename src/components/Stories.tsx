import { Plus } from "lucide-react";

const stories = [
  { name: "Your Story", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face", bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=320&fit=crop", isCreate: true },
  { name: "Sarah", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face", bg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=320&fit=crop" },
  { name: "Mike", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", bg: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=320&fit=crop" },
  { name: "Emily", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face", bg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=320&fit=crop" },
  { name: "Alex", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face", bg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=320&fit=crop" },
];

const Stories = () => {
  return (
    <div className="fb-card p-4 mb-4">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {stories.map((story, i) => (
          <div
            key={i}
            className="relative w-28 h-48 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src={story.bg}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            
            {story.isCreate ? (
              <>
                <div className="absolute bottom-0 left-0 right-0 bg-card pt-7 pb-2 text-center">
                  <p className="text-xs font-semibold">Create Story</p>
                </div>
                <div className="absolute bottom-[28px] left-1/2 -translate-x-1/2 w-9 h-9 bg-primary rounded-full flex items-center justify-center border-4 border-card">
                  <Plus className="w-5 h-5 text-primary-foreground" />
                </div>
              </>
            ) : (
              <>
                <div className="absolute top-3 left-3">
                  <img src={story.avatar} alt="" className="w-10 h-10 rounded-full border-[3px] border-primary" />
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-primary-foreground text-xs font-semibold">
                  {story.name}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
