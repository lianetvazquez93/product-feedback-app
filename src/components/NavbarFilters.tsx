import React from 'react';

const NavbarFilters: React.FC<any> = ({ selectFilter, filterTypes, filterType }) => {
  return (
    <div className="ml-6 mt-6 md:mr-4 lg:mr-12 flex flex-wrap justify-start">
      {Object.keys(filterTypes).map((filter) => {
        return (
          <button
            key={filter}
            className={`rounded-large px-4 py-1.5 mb-3.5 mr-auto inline-block align-middle flex-none text-sm font-semibold ${
              filterType === filter ? 'text-white bg-blue' : 'text-blue bg-gray hover:bg-blue-lighter'
            }`}
            onClick={() => selectFilter(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default NavbarFilters;
