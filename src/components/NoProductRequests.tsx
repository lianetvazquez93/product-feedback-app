import React from 'react';
import norequests from '../assets/norequests.png';

const NoProductRequests: React.FC = () => {
  return (
    <div className="rounded-large bg-white mx-6 mt-8 md:mx-10 md:mt-6 py-20 md:py-28 mb-10">
      <div className="mx-auto w-72 md:w-2/3 text-center">
        <img className="mx-auto" src={norequests} />
        <p className="font-bold text-indigo text-lg md:text-2xl mt-10 md:mt-14">There is no feedback yet.</p>
        <p className="font-normal text-sm md:text-base text-gray-dark mt-3.5 md:mt-4">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
        </p>
        <button className="mx-auto bg-purple text-sm text-gray-light font-bold rounded-large h-10 px-4 hover:bg-purple-light md:h-11 mt-6 md:mt-12">
          + Add Feedback
        </button>
      </div>
    </div>
  );
};

export default NoProductRequests;
