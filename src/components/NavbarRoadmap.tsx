import React from 'react';
import { Link } from 'react-router-dom';
import { ProductRequest } from '../pages/Suggestions';

interface NavbarRoadmapProps {
  productRequests: ProductRequest[];
}

const NavbarRoadmap: React.FC<NavbarRoadmapProps> = ({ productRequests }) => {
  return (
    <div className="mx-6 mt-5">
      <div className="flex justify-between flex-none items-center">
        <span className="font-bold text-lg text-indigo-dark">Roadmap</span>
        <Link to="/roadmap" className="font-semibold text-sm text-blue underline">
          View
        </Link>
      </div>
      <div className="flex justify-between flex-none items-center mt-6">
        <div className="w-32">
          <div className="h-2 w-2 inline-block" style={{ backgroundColor: '#F49F85', borderRadius: '1rem' }}></div>
          <span className="font-normal text-base text-gray-dark ml-4">Planned</span>
        </div>
        <span className="font-bold text-base text-gray-dark">
          {productRequests.filter((request: ProductRequest) => request.status === 'planned').length}
        </span>
      </div>
      <div className="flex justify-between flex-none items-center mt-2">
        <div className="w-32">
          <div className="h-2 w-2 inline-block bg-purple" style={{ borderRadius: '1rem' }}></div>
          <span className="font-normal text-base text-gray-dark ml-4">In-Progress</span>
        </div>
        <span className="font-bold text-base text-gray-dark">
          {productRequests.filter((request: ProductRequest) => request.status === 'in-progress').length}
        </span>
      </div>
      <div className="flex justify-between flex-none items-center mt-2">
        <div className="w-32">
          <div className="h-2 w-2 inline-block" style={{ backgroundColor: '#62BCFA', borderRadius: '1rem' }}></div>
          <span className="font-normal text-base text-gray-dark ml-4">Live</span>
        </div>
        <span className="font-bold text-base text-gray-dark">
          {productRequests.filter((request: ProductRequest) => request.status === 'live').length}
        </span>
      </div>
    </div>
  );
};

export default NavbarRoadmap;
