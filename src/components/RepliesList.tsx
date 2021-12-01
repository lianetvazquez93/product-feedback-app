import React from 'react';
import { Reply } from '../pages/Suggestions';
import ReplyCard from './ReplyCard';

interface RepliesListProps {
  replies: Reply[];
}

const RepliesList: React.FC<RepliesListProps> = ({ replies }) => {
  return (
    <div className="mt-6 md:mt-8">
      <ul className="pl-6 md:pl-12">
        {replies.map((reply: Reply) => (
          <ReplyCard key={reply.content} reply={reply} />
        ))}
      </ul>
    </div>
  );
};

export default RepliesList;
