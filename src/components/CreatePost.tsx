import { Image, Smile, Video } from "lucide-react";

const CreatePost = () => {
  return (
    <div className="fb-card p-4 mb-4">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
          alt="Profile"
          className="fb-avatar w-10 h-10"
        />
        <button className="flex-1 bg-muted hover:bg-accent rounded-full px-4 py-2.5 text-left text-muted-foreground text-sm transition-colors">
          What's on your mind, John?
        </button>
      </div>

      <div className="fb-separator mb-3" />

      <div className="flex">
        <button className="fb-reaction-btn">
          <Video className="w-5 h-5 text-fb-red" />
          <span className="hidden sm:inline">Live video</span>
        </button>
        <button className="fb-reaction-btn">
          <Image className="w-5 h-5 text-fb-green" />
          <span className="hidden sm:inline">Photo/video</span>
        </button>
        <button className="fb-reaction-btn">
          <Smile className="w-5 h-5 text-fb-yellow" />
          <span className="hidden sm:inline">Feeling/activity</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
