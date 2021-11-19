import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductRequestsList from '../components/ProductRequestsList';
import EmptySuggestions from '../components/EmptySuggestions';
import NavbarRoadmap from '../components/NavbarRoadmap';
import NavbarFilters from '../components/NavbarFilters';

const filterTypes = {
  All: 'All',
  UI: 'UI',
  UX: 'UX',
  Enhancement: 'Enhancement',
  Bug: 'Bug',
  Feature: 'Feature',
};

const Suggestions: React.FC = () => {
  const [productRequests, setProductRequests] = useState<any>([]);
  const [sortType, setSortType] = useState<string>('Most Upvotes');
  const [filterType, setFilterType] = useState<string>(filterTypes.All);
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  const filterData = (data: any) => {
    switch (filterType) {
      case filterTypes.All: {
        return data;
      }
      case filterTypes.UI: {
        return data.filter((request: any) => request.category === 'ui');
      }
      case filterTypes.UX: {
        return data.filter((request: any) => request.category === 'ux');
      }
      case filterTypes.Enhancement: {
        return data.filter((request: any) => request.category === 'enhancement');
      }
      case filterTypes.Bug: {
        return data.filter((request: any) => request.category === 'bug');
      }
      case filterTypes.Feature: {
        return data.filter((request: any) => request.category === 'feature');
      }
    }
  };

  const sortData = (data: any) => {
    switch (sortType) {
      case 'Most Upvotes': {
        setProductRequests(data.sort((a: any, b: any) => b.upvotes - a.upvotes));
        break;
      }
      case 'Least Upvotes': {
        setProductRequests(data.sort((a: any, b: any) => a.upvotes - b.upvotes));
        break;
      }
      case 'Most Comments': {
        setProductRequests(
          data.sort(
            (a: any, b: any) => (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0) || b - a,
          ),
        );
        break;
      }
      case 'Least Comments': {
        setProductRequests(
          data.sort(
            (a: any, b: any) => (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0) || a - b,
          ),
        );
        break;
      }
    }
  };
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNavbarVisible(false);
    }
  };

  useEffect(() => {
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
            <div className="md:inline md:ml-10">
              <label htmlFor="sort" className="text-sm text-gray-light">
                Sort by:
              </label>
              <select
                id="sort"
                className="border-0 ml-1 bg-transparent text-sm text-gray-light font-bold focus:border-0"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="Most Upvotes">Most Upvotes</option>
                <option value="Least Upvotes">Least Upvotes</option>
                <option value="Most Comments">Most Comments</option>
                <option value="Least Comments">Least Comments</option>
              </select>
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
            <ProductRequestsList productRequests={productRequests} />
          ) : (
            <EmptySuggestions />
          )}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
