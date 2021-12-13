import React, { useState } from 'react';
import { Comment } from '../pages/Suggestions';
import imageelijah from '../assets/user-images/image-elijah.jpg';
import RepliesList from './RepliesList';

interface CommentCardProps {
  comment: Comment;
  updateProductRequest: () => Promise<void>;
  postReply: (id: string, content: string) => Promise<void>;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment, updateProductRequest, postReply }) => {
  const [showPostReply, setShowPostReply] = useState<boolean>(false);
  const [replyContent, setReplyContent] = useState<string>('');

  const onPostReplyClick = async () => {
    await postReply(comment.id, replyContent);
    setReplyContent('');
    setShowPostReply(false);
    updateProductRequest();
  };

  return (
    <div className="mb-6 pb-6">
      <div className="flex justify-between h-10 items-center">
        <div className="flex justify-start items-start h-full">
          <img src={imageelijah} className="h-full w-10 rounded-full" />
          <div className="h-full ml-4 md:ml-8 w-32">
            <p className="font-bold text-sm text-indigo md:text-base">{comment.user.name}</p>
            <p className="text-sm text-gray-dark md:text-base">@{comment.user.username}</p>
          </div>
        </div>
        <button className="font-semibold text-sm text-blue hover:underline p-0" onClick={() => setShowPostReply(true)}>
          Reply
        </button>
      </div>
      <p className="mt-4 text-sm md:text-base text-gray-dark mx-0 md:ml-16">{comment.content}</p>
      {showPostReply && (
        <div className="flex justify-between items-start mt-6 md:ml-16">
          <textarea
            className="p-4 md:p-6 rounded-large bg-gray-light focus:ring-1 focus:ring-blue h-20 w-2/3 md:w-3/4 lg:w-4/5"
            value={replyContent}
            placeholder="Type your comment here"
            maxLength={250}
            onChange={(e) => setReplyContent(e.target.value)}
          />
          <button
            className={`bg-purple hover:bg-purple-light rounded-large font-bold text-sm text-gray-light px-4 md:px-6 py-2.5 md:py-3 ${
              replyContent.length ? '' : 'cursor-not-allowed'
            }`}
            onClick={onPostReplyClick}
          >
            Post Reply
          </button>
        </div>
      )}
      {comment.replies && <RepliesList replies={comment.replies} />}
    </div>
  );
};

export default CommentCard;
