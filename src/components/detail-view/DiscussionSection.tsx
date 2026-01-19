import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  message: string;
  timestamp: string;
}

interface DiscussionSectionProps {
  comments: Comment[];
  totalComments?: number;
}

export const DiscussionSection: React.FC<DiscussionSectionProps> = ({
  comments,
  totalComments,
}) => {
  const remainingComments = totalComments ? totalComments - comments.length : 0;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Discussion</h3>
      
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-2">
            <div className="flex gap-3">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={comment.authorAvatar} />
                <AvatarFallback className="bg-muted text-xs">
                  {comment.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="text-primary font-medium">{comment.author}</span>{" "}
                  <span className="text-foreground">{comment.message}</span>
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <button className="hover:text-foreground">Like</button>
                  <span>·</span>
                  <button className="hover:text-foreground">Reply</button>
                  <span>·</span>
                  <span>{comment.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {remainingComments > 0 && (
        <button className="text-primary text-sm hover:underline">
          + {remainingComments} comments
        </button>
      )}
    </div>
  );
};

export default DiscussionSection;
