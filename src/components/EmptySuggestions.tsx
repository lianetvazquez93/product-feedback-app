import React from 'react';
import { Link } from 'react-router-dom';
import emptysuggestions from '../assets/emptysuggestions.png';

const EmptySuggestions: React.FC = () => {
  return (
    <div className="rounded-large bg-white mx-6 md:mx-0 mt-8 md:mt-6 py-20 md:py-28">
      <div className="mx-auto w-72 md:w-2/3 text-center">
        <img className="mx-auto" src={emptysuggestions} />
        <p className="font-bold text-indigo text-lg md:text-2xl mt-10 md:mt-14">There is no feedback yet.</p>
        <p className="font-normal text-sm md:text-base text-gray-dark mt-3.5 md:mt-4 mb-6 md:mb-12">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
        </p>
        <Link
          to="/new"
          className="mx-auto bg-purple text-sm text-gray-light font-bold rounded-large py-2.5 px-4 hover:bg-purple-light md:py-3 md:px-6"
        >
          + Add Feedback
        </Link>
      </div>
    </div>
  );
};

export default EmptySuggestions;
