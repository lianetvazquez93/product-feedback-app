import React from 'react';
import axios from 'axios';
import { Comment } from '../pages/Suggestions';
import CommentCard from './CommentCard';

interface CommentsListProps {
  comments: Comment[];
  requestId: string;
  updateProductRequest: () => Promise<void>;
}

const CommentsList: React.FC<CommentsListProps> = ({ comments, updateProductRequest, requestId }) => {
  const postReply = async (id: string, content: string) => {
    const { data } = await axios.get('http://localhost:5001/currentUser');

    await axios.patch(`http://localhost:5001/productRequests/${requestId}`, {
      comments: comments.map((comment: Comment) => {
        if (comment.id === id) {
          if (comment.replies) {
            return {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  content: content,
                  replyingTo: comment.user.username,
                  user: data,
                },
              ],
            };
          }

          return {
            ...comment,
            replies: [
              {
                content: content,
                replyingTo: comment.user.username,
                user: data,
              },
            ],
          };
        }

        return comment;
      }),
    });
  };

  return (
    <div className="bg-white rounded-large mt-6 py-6">
      <span className="ml-5 pl-1 md:ml-8 md:pl-0.5 text-indigo text-lg font-bold">
        {comments.length === 1 ? '1 Comment' : `${comments.length} Comments`}
      </span>
      <ul className="mt-7 px-6 md:px-8">
        {comments.map((comment: Comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            updateProductRequest={updateProductRequest}
            postReply={postReply}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
