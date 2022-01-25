import { ProductRequest } from '../pages/Suggestions';

export const sortTypes = {
  mostUpvotes: 'Most Upvotes',
  leastUpvotes: 'Least Upvotes',
  mostComments: 'Most Comments',
  leastComments: 'Least Comments',
};

const sortData = (data: ProductRequest[], sortType: string): ProductRequest[] => {
  switch (sortType) {
    case sortTypes.mostUpvotes: {
      return data.sort((a: ProductRequest, b: ProductRequest) => b.upvotes - a.upvotes);
    }
    case sortTypes.leastUpvotes: {
      return data.sort((a: ProductRequest, b: ProductRequest) => a.upvotes - b.upvotes);
    }
    case sortTypes.mostComments: {
      return data.sort(
        (a: ProductRequest, b: ProductRequest) =>
          (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0),
      );
    }
    case sortTypes.leastComments: {
      return data.sort(
        (a: ProductRequest, b: ProductRequest) =>
          (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0),
      );
    }
    default: {
      return data;
    }
  }
};

export default sortData;
