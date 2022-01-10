import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewFeedback: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('Feature');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  return (
    <div className="m-0 pb-6 w-full">
      <div className="w-auto mx-6 mt-9 md:mt-14 lg:mt-24 md:w-144 md:mx-auto">
        <Link to="/" className="py-2.5 md:py-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20" fill="#4661E6">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold text-gray-dark text-sm ml-1.5 hover:underline">Go Back</span>
        </Link>
        <div className="flex mt-9 md:mt-10 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden h-10 w-10 bg-gradient-to-r from-primary via-secondary to-danger absolute top-0 left-6 z-20"
            style={{ borderRadius: '1.25rem' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FFFFFF"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="invisible md:visible h-14 w-14 bg-gradient-to-r from-primary via-secondary to-danger absolute top-0 left-11 z-20"
            style={{ borderRadius: '1.75rem' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FFFFFF"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <div className="absolute top-5 md:top-7 bg-white w-full rounded-large pt-11 md:pt-14 px-6 md:px-10 pb-6 md:pb-10">
            <p className="font-bold text-indigo text-lg md:text-2xl">Create New Feedback</p>
            <div className="mt-6 md:mt-10">
              <label className="font-bold text-indigo text-sm">Feedback Title</label>
              <p className="text-sm text-gray-dark">Add a short, descriptive headline</p>
              <input
                className="bg-gray-light rounded-large h-12 mt-4 w-full focus:border-blue pl-6"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <label className="font-bold text-indigo text-sm">Category</label>
              <p className="text-sm text-gray-dark">Choose a category for your feedback</p>
              <button
                className="mt-4 text-sm text-indigo bg-gray-light w-full rounded-large py-3.5 px-4 md:px-6 flex justify-between"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                {category}
                <div className="h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={dropdownVisible ? 'h-0 w-0' : 'h-5 w-5'}
                    viewBox="0 0 20 20"
                    fill="#4661E6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={dropdownVisible ? 'h-5 w-5' : 'h-0 w-0'}
                    viewBox="0 0 20 20"
                    fill="#4661E6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`mt-4 bg-white rounded-large ${
                  dropdownVisible ? 'w-full h-60 shadow-xl' : 'w-0 h-0 invisible'
                }`}
              >
                <button
                  className="flex px-6 w-full h-1/5 justify-between items-center border-b border-indigo border-opacity-20 text-gray-dark hover:text-purple"
                  onClick={() => setCategory('Feature')}
                >
                  <span>Feature</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`inline ${category === 'Feature' ? 'h-5 w-5' : 'h-0 w-0'}`}
                    viewBox="0 0 20 20"
                    fill="#AD1FEA"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="flex px-6 justify-between items-center w-full h-1/5 border-b border-indigo border-opacity-20 text-gray-dark hover:text-purple"
                  onClick={() => setCategory('UI')}
                >
                  <span>UI</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`inline ${category === 'UI' ? 'h-5 w-5' : 'h-0 w-0'}`}
                    viewBox="0 0 20 20"
                    fill="#AD1FEA"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="flex px-6 justify-between items-center w-full h-1/5 border-b border-indigo border-opacity-20 text-gray-dark hover:text-purple"
                  onClick={() => setCategory('UX')}
                >
                  <span>UX</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`inline ${category === 'UX' ? 'h-5 w-5' : 'h-0 w-0'}`}
                    viewBox="0 0 20 20"
                    fill="#AD1FEA"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="flex px-6 justify-between items-center w-full h-1/5 border-b border-indigo border-opacity-20 text-gray-dark hover:text-purple"
                  onClick={() => setCategory('Enhancement')}
                >
                  <span>Enhancement</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`inline ${category == 'Enhancement' ? 'h-5 w-5' : 'h-0 w-0'}`}
                    viewBox="0 0 20 20"
                    fill="#AD1FEA"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="flex px-6 justify-between items-center w-full h-1/5 text-gray-dark hover:text-purple"
                  onClick={() => setCategory('Bug')}
                >
                  <span>Bug</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`inline ${category == 'Bug' ? 'h-5 w-5' : 'h-0 w-0'}`}
                    viewBox="0 0 20 20"
                    fill="#AD1FEA"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
