import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductRequestsList from '../components/ProductRequestsList';
import EmptySuggestions from '../components/EmptySuggestions';
import NavbarRoadmap from '../components/NavbarRoadmap';
import NavbarFilters from '../components/NavbarFilters';

const filterTypes = {
  all: 'All',
  ui: 'UI',
  ux: 'UX',
  enhancement: 'Enhancement',
  bug: 'Bug',
  feature: 'Feature',
};

const sortTypes = {
  mostUpvotes: 'Most Upvotes',
  leastUpvotes: 'Least Upvotes',
  mostComments: 'Most Comments',
  leastComments: 'Least Comments',
};

const Suggestions: React.FC = () => {
  const [productRequests, setProductRequests] = useState<any>([]);
  const [sortType, setSortType] = useState<string>(sortTypes.mostUpvotes);
  const [filterType, setFilterType] = useState<string>(filterTypes.all);
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const filterData = (data: any) => {
    switch (filterType) {
      case filterTypes.all: {
        return data;
      }
      case filterTypes.ui: {
        return data.filter((request: any) => request.category === 'ui');
      }
      case filterTypes.ux: {
        return data.filter((request: any) => request.category === 'ux');
      }
      case filterTypes.enhancement: {
        return data.filter((request: any) => request.category === 'enhancement');
      }
      case filterTypes.bug: {
        return data.filter((request: any) => request.category === 'bug');
      }
      case filterTypes.feature: {
        return data.filter((request: any) => request.category === 'feature');
      }
    }
  };

  const sortData = (data: any) => {
    switch (sortType) {
      case sortTypes.mostUpvotes: {
        setProductRequests(data.sort((a: any, b: any) => b.upvotes - a.upvotes));
        break;
      }
      case sortTypes.leastUpvotes: {
        setProductRequests(data.sort((a: any, b: any) => a.upvotes - b.upvotes));
        break;
      }
      case sortTypes.mostComments: {
        setProductRequests(
          data.sort(
            (a: any, b: any) => (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0) || b - a,
          ),
        );
        break;
      }
      case sortTypes.leastComments: {
        setProductRequests(
          data.sort(
            (a: any, b: any) => (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0) || a - b,
          ),
        );
        break;
      }
    }
  };

  const updateProductRequests = async () => {
    const { data } = await axios.get('http://localhost:5001/productRequests');
    sortData(filterData(data));
  };

  const selectSortType = (sortValue: string) => {
    setSortType(sortValue);
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    if (navbarVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navbarVisible]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:5001/productRequests');
      sortData(filterData(data));
    })();
  }, [sortType, filterType]);

  return (
    <div
      className="m-0 pb-6 flex items-start justify-center w-100 md:justify-between lg:mx-auto lg:px-4"
      style={{ maxWidth: '70rem' }}
    >
      <div className="w-0 invisible lg:visible lg:w-64 flex flex-col mt-24 sticky top-24">
        <div className="w-full rounded-large bg-gradient-to-r from-primary via-secondary to-danger h-36 flex items-end">
          <div className="ml-6 mb-6">
            <p className="font-bold text-white text-xl">Frontend Mentor</p>
            <p className="font-medium text-white opacity-75 text-base">Feedback Board</p>
          </div>
        </div>
        <div className="bg-white rounded-large w-full mt-6 h-44">
          <NavbarFilters selectFilter={setFilterType} filterTypes={filterTypes} filterType={filterType} />
        </div>
        <div className="bg-white rounded-large w-full mt-6 h-44">
          <NavbarRoadmap productRequests={productRequests} />
        </div>
      </div>
      <div className="w-full md:px-10 lg:w-3/4 lg:pr-0">
        <div className="invisible bg-gray-light h-0 flex justify-between items-center md:visible md:h-44 md:mt-14 md:mb-10 lg:invisible lg:h-0 lg:m-0">
          <div className="bg-gradient-to-r from-primary via-secondary to-danger h-full rounded-large w-56 flex items-end">
            <div className="ml-6 mb-6">
              <p className="font-bold text-xl text-white">Frontend Mentor</p>
              <p className="font-medium text-base text-white opacity-75">Feedback Board</p>
            </div>
          </div>
          <div className="bg-white rounded-large w-56 h-full">
            <NavbarFilters selectFilter={setFilterType} filterTypes={filterTypes} filterType={filterType} />
          </div>
          <div className="bg-white rounded-large w-56 h-full">
            <NavbarRoadmap productRequests={productRequests} />
          </div>
        </div>
        <div className="px-6 h-20 bg-gradient-to-r from-primary via-secondary to-danger flex justify-between items-center md:invisible md:h-0">
          <div>
            <p className="font-bold text-base text-white">Frontend Mentor</p>
            <p className="font-medium text-sm text-white opacity-75">Feedback Board</p>
          </div>
          <div className="w-6 h-6 md:h-0 md:w-0 md:invisible">
            <button onClick={() => setNavbarVisible(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${navbarVisible ? 'h-6 w-6 visible' : 'h-0 w-0 invisible'} md:w-0 md:h-0 md:invisible`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button onClick={() => setNavbarVisible(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${navbarVisible ? 'h-0 w-0 invisible' : 'h-6 w-6 visible'} md:w-0 md:h-0 md:invisible`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <aside
          className={`bg-gray-light absolute bottom-0 top-20 right-0 md:w-0 md:invisible overflow-hidden ease-in-out transition-all duration-300 z-30  ${
            navbarVisible ? '-translate-x-0 w-72' : 'translate-x-full w-0 invisible'
          }`}
        >
          <div className="mx-6 mt-6 flex flex-col">
            <div className="w-full bg-white rounded-large h-44">
              <NavbarFilters selectFilter={setFilterType} filterTypes={filterTypes} filterType={filterType} />
            </div>
            <div className="w-full bg-white rounded-large mt-6 h-44">
              <NavbarRoadmap productRequests={productRequests} />
            </div>
          </div>
        </aside>
        <div
          className={`absolute top-20 bg-black bg-opacity-75 z-20 ${navbarVisible ? 'bottom-0 w-full' : 'h-0 w-0'}`}
        ></div>
        <div className="flex justify-between items-center bg-indigo-dark pl-6 pr-3 py-2 mb-8 md:rounded-large md:py-3.5 lg:mt-24 z-10">
          <div className="md:w-3/4 h-7">
            <div className="invisible w-0 h-0 md:visible md:inline md:w-52 md:h-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <span className="ml-4 text-gray-light font-bold text-lg my-auto">{`${productRequests.length} Suggestions`}</span>
            </div>
            <button
              className="md:ml-10 text-sm text-gray-light inline"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <span>Sort by:</span>
              <span className="ml-1 font-bold mr-2">{sortType}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`inline ${dropdownVisible ? 'h-0 w-0' : 'h-5 w-5'}`}
                viewBox="0 0 20 20"
                fill="#FFFFFF"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`inline ${dropdownVisible ? 'h-5 w-5' : 'h-0 w-0'}`}
                viewBox="0 0 20 20"
                fill="#FFFFFF"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute left-4 md:left-64 lg:left-1/2 mt-10 bg-white rounded-large ${
                dropdownVisible ? 'w-64 h-48 shadow-xl' : 'w-0 h-0 invisible'
              }`}
            >
              <button
                className="flex px-6 w-full h-1/4 justify-between items-center border-b border-indigo border-opacity-20 text-gray-dark hover:text-purple"
                onClick={() => selectSortType(sortTypes.mostUpvotes)}
              >
                <span>{sortTypes.mostUpvotes}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`inline ${sortType === sortTypes.mostUpvotes ? 'h-5 w-5' : 'h-0 w-0'}`}
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
                className="flex px-6 justify-between items-center w-full h-1/4 border-b border-indigo border-opacity-20 text-gray-dark hover:text-purple"
                onClick={() => selectSortType(sortTypes.leastUpvotes)}
              >
                <span>{sortTypes.leastUpvotes}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`inline ${sortType === sortTypes.leastUpvotes ? 'h-5 w-5' : 'h-0 w-0'}`}
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
                className="flex px-6 justify-between items-center w-full h-1/4 border-b border-indigo border-opacity-20 text-gray-dark hover:text-purple"
                onClick={() => selectSortType(sortTypes.mostComments)}
              >
                <span>{sortTypes.mostComments}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`inline ${sortType === sortTypes.mostComments ? 'h-5 w-5' : 'h-0 w-0'}`}
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
                className="flex px-6 justify-between items-center w-full h-1/4 text-gray-dark hover:text-purple"
                onClick={() => selectSortType(sortTypes.leastComments)}
              >
                <span>{sortTypes.leastComments}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`inline ${sortType === sortTypes.leastComments ? 'h-5 w-5' : 'h-0 w-0'}`}
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
          <Link
            to="/new"
            className="inline-block align-middle bg-purple text-sm text-gray-light font-bold rounded-large hover:bg-purple-light py-2.5 px-4 md:py-3"
          >
            + Add Feedback
          </Link>
        </div>
        <div className="z-10">
          {productRequests.length > 0 ? (
            <ProductRequestsList productRequests={productRequests} updateProductRequests={updateProductRequests} />
          ) : (
            <EmptySuggestions />
          )}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
