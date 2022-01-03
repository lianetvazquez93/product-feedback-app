import React from 'react';
import { Reply, Comment } from '../pages/Suggestions';
import ReplyCard from './ReplyCard';

interface RepliesListProps {
  replies: Reply[];
  comment: Comment;
  postReply: (id: string, content: string) => Promise<void>;
  updateProductRequest: () => Promise<void>;
}

const RepliesList: React.FC<RepliesListProps> = ({ replies, comment, postReply, updateProductRequest }) => {
  return (
    <div className="mt-6 md:mt-8">
      <ul className="pl-6 md:pl-12">
        {replies.map((reply: Reply) => (
          <ReplyCard
            key={reply.content}
            reply={reply}
            comment={comment}
            postReply={postReply}
            updateProductRequest={updateProductRequest}
          />
        ))}
      </ul>
    </div>
  );
};

export default RepliesList;
