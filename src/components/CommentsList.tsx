import React from 'react';
import { Comment } from '../pages/Suggestions';

interface CommentsListProps {
  comments: Comment[];
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div className="bg-white rounded-large mt-6 py-6">
      <span className="ml-5 pl-1 md:ml-8 md:pl-0.5 text-indigo text-lg font-bold">
        {comments.length === 1 ? '1 Comment' : `${comments.length} Comments`}
      </span>
    </div>
  );
};

export default CommentsList;
