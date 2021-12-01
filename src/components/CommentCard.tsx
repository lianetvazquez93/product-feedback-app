import React from 'react';
import { Comment } from '../pages/Suggestions';
import imageelijah from '../assets/user-images/image-elijah.jpg';
import RepliesList from './RepliesList';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const renderReplies = () => {
    if (!comment.replies) {
      return <div className="hidden"></div>;
    }

    return <RepliesList replies={comment.replies} />;
  };

  return (
    <div className="mb-6 pb-6">
      <div className="flex justify-between h-10 items-center">
        <div className="flex justify-start items-start h-full">
          <img src={imageelijah} className="h-full w-10 rounded-full" />
          <div className="h-full ml-4 md:ml-8 w-32">
            <p className="font-bold text-sm text-indigo">{comment.user.name}</p>
            <p className="text-sm text-gray-dark">@{comment.user.username}</p>
          </div>
        </div>
        <button className="font-semibold text-sm text-blue hover:underline p-0">Reply</button>
      </div>
      <p className="mt-4 text-sm md:text-base text-gray-dark mx-0 md:ml-16">{comment.content}</p>
      {renderReplies()}
    </div>
  );
};

export default CommentCard;
