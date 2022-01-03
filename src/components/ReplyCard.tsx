import React, { useState } from 'react';
import { Comment, Reply } from '../pages/Suggestions';
import imageelijah from '../assets/user-images/image-elijah.jpg';

interface ReplyCardProps {
  reply: Reply;
  comment: Comment;
  postReply: (id: string, content: string) => Promise<void>;
  updateProductRequest: () => Promise<void>;
}

const ReplyCard: React.FC<ReplyCardProps> = ({ reply, comment, postReply, updateProductRequest }) => {
  const [replyContent, setReplyContent] = useState<string>('');
  const [showPostReply, setShowPostReply] = useState<boolean>(false);

  const onPostReplyClick = async () => {
    await postReply(comment.id, replyContent);
    setReplyContent('');
    setShowPostReply(false);
    updateProductRequest();
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between h-10 items-center">
        <div className="flex justify-start items-start h-full">
          <img src={imageelijah} className="h-full w-10 rounded-full" />
          <div className="h-full ml-4 md:ml-10 w-32">
            <p className="font-bold text-sm text-indigo">{reply.user.name}</p>
            <p className="text-sm text-gray-dark">@{reply.user.username}</p>
          </div>
        </div>
        <button
          className="font-semibold text-sm text-blue hover:underline p-0"
          onClick={() => setShowPostReply(!showPostReply)}
        >
          Reply
        </button>
      </div>
      <div className="mt-4 md:mt-2.5 md:pl-20">
        <span className="font-bold text-sm text-purple md:text-base">@{reply.replyingTo} </span>
        <span className="text-sm text-gray-dark md:text-base">{reply.content}</span>
      </div>
      {showPostReply && (
        <div className="flex justify-between items-start mt-6 md:ml-20">
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
    </div>
  );
};

export default ReplyCard;
