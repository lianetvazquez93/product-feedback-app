import React from 'react';

const ProductRequests: React.FC<{ productRequests: any }> = ({ productRequests }) => {
  return (
    <div>
      <ul>
        {productRequests.map((request: any) => (
          <li key={request.title}>{request.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRequests;
