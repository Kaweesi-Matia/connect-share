import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Stories from "@/components/Stories";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";

const posts = [
  {
    author: "Sarah Wilson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    time: "2h",
    content: "Just finished building my new React project! 🚀 The feeling of seeing everything come together is amazing. What are you all working on?",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    likes: 42,
    comments: 8,
    shares: 3,
  },
  {
    author: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    time: "4h",
    content: "Beautiful sunset at the beach today. Sometimes you just need to step away from the screen and enjoy nature. 🌅",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    likes: 128,
    comments: 24,
    shares: 12,
  },
  {
    author: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    time: "6h",
    content: "Excited to announce that I've been accepted into the Google Developer Program! Hard work pays off. Thank you to everyone who supported me along the way! 🎉",
    likes: 256,
    comments: 45,
    shares: 18,
  },
  {
    author: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    time: "8h",
    content: "New coffee shop discovery! This place has the best latte art I've ever seen. ☕",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    likes: 67,
    comments: 12,
    shares: 2,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <LeftSidebar />
      <RightSidebar />

      {/* Main Feed */}
      <main className="pt-14 lg:pl-[280px] xl:pr-[280px]">
        <div className="max-w-[680px] mx-auto px-4 py-4">
          <Stories />
          <CreatePost />
          {posts.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
