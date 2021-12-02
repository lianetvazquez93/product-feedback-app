import React, { useState } from 'react';

const AddComment: React.FC = () => {
  const [charCount, setCharCount] = useState<number>(0);

  return (
    <div className="bg-white rounded-large py-6 px-6 md:px-8 mt-6">
      <span className="font-bold text-lg text-indigo pl-1.5">Add Comment</span>
      <textarea
        className="w-full h-20 p-4 md:p-6 mt-6 rounded-large bg-gray-light"
        placeholder="Type your comment here"
        onChange={(e) => setCharCount(e.target.value.length)}
        maxLength={250}
      ></textarea>
      <div className="flex justify-between items-center mt-4">
        <span className="text-base text-gray-dark pl-1.5">{250 - charCount} characters left</span>
        <button className="bg-purple bg:purple-light rounded-large font-bold text-sm text-gray-light px-4 md:px-6 py-2.5 md:py-3">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
