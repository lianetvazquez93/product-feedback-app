import axios from 'axios';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Comment } from '../pages/Suggestions';
interface AddCommentProps {
  id: string;
  comments: Comment[];
  updateProductRequest: () => void;
}

const AddComment: React.FC<AddCommentProps> = ({ id, comments, updateProductRequest }) => {
  const [charCount, setCharCount] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const onTextareaUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCharCount(e.target.value.length);
    setContent(e.target.value);
  };

  const onPostCommentClick = async () => {
    const { data } = await axios.get('http://localhost:5001/currentUser');

    await axios.patch(`http://localhost:5001/productRequests/${id}`, {
      comments: [
        ...comments,
        {
          id: uuidv4(),
          content: content,
          user: data,
        },
      ],
    });
    setContent('');
    updateProductRequest();
  };

  return (
    <div className="bg-white rounded-large py-6 px-6 md:px-8 mt-6">
      <span className="font-bold text-lg text-indigo pl-1.5">Add Comment</span>
      <textarea
        className="w-full h-20 p-4 md:p-6 mt-6 rounded-large bg-gray-light focus:ring-1 focus:ring-blue"
        placeholder="Type your comment here"
        value={content}
        onChange={(e) => onTextareaUpdate(e)}
        maxLength={250}
      ></textarea>
      <div className="flex justify-between items-center mt-4">
        <span className="text-base text-gray-dark pl-1.5">{250 - charCount} characters left</span>
        <button
          className={`bg-purple hover:bg-purple-light rounded-large font-bold text-sm text-gray-light px-4 md:px-6 py-2.5 md:py-3 ${
            content.length ? '' : 'cursor-not-allowed'
          }`}
          onClick={onPostCommentClick}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
