import React from 'react';
import { Comment } from '../pages/Suggestions';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between h-10 items-center">
        <div className="flex justify-start items-start h-full">
          <img src={comment.user.image} className="h-full w-10 rounded-full" />
          <div className="h-full ml-4 md:ml-8 w-32">
            <p className="font-bold text-sm text-indigo">{comment.user.name}</p>
            <p className="text-sm text-gray-dark">@{comment.user.username}</p>
          </div>
        </div>
        <button className="font-semibold text-sm text-blue hover:underline p-0">Reply</button>
      </div>
    </div>
  );
};

export default CommentCard;
