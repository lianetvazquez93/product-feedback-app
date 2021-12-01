import React from 'react';
import { Reply } from '../pages/Suggestions';
import imageelijah from '../assets/user-images/image-elijah.jpg';

interface ReplyCardProps {
  reply: Reply;
}

const ReplyCard: React.FC<ReplyCardProps> = ({ reply }) => {
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
        <button className="font-semibold text-sm text-blue hover:underline p-0">Reply</button>
      </div>
      <div className="mt-4 md:mt-2.5 md:pl-20">
        <span className="font-bold text-sm text-purple">@{reply.replyingTo} </span>
        <span className="text-sm text-gray-dark">{reply.content}</span>
      </div>
    </div>
  );
};

export default ReplyCard;
