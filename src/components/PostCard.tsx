import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, Globe } from "lucide-react";
import { useState } from "react";

interface PostProps {
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const PostCard = ({ author, avatar, time, content, image, likes, comments, shares }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="fb-card mb-4">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={author} className="fb-avatar w-10 h-10" />
          <div>
            <p className="font-semibold text-sm hover:underline cursor-pointer">{author}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{time}</span>
              <span>·</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>
        <button className="fb-icon-btn w-8 h-8">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Content */}
      <p className="px-4 pb-3 text-[15px]">{content}</p>

      {/* Image */}
      {image && (
        <img src={image} alt="Post" className="w-full max-h-[500px] object-cover cursor-pointer" />
      )}

      {/* Stats */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <ThumbsUp className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">{likeCount}</span>
        </div>
        <div className="flex gap-3 text-sm text-muted-foreground">
          <span className="hover:underline cursor-pointer">{comments} comments</span>
          <span className="hover:underline cursor-pointer">{shares} shares</span>
        </div>
      </div>

      <div className="fb-separator mx-4" />

      {/* Actions */}
      <div className="flex px-2 py-1">
        <button onClick={handleLike} className={`fb-reaction-btn ${liked ? "text-primary" : ""}`}>
          <ThumbsUp className={`w-5 h-5 ${liked ? "fill-primary" : ""}`} />
          <span>Like</span>
        </button>
        <button className="fb-reaction-btn">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="fb-reaction-btn">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
