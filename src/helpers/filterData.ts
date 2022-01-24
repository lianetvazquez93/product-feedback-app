import { ProductRequest } from '../pages/Suggestions';

export interface FilterTypes {
  all: string;
  ui: string;
  ux: string;
  enhancement: string;
  bug: string;
  feature: string;
}

export const filterTypes: FilterTypes = {
  all: 'All',
  ui: 'UI',
  ux: 'UX',
  enhancement: 'Enhancement',
  bug: 'Bug',
  feature: 'Feature',
};

const filterData = (data: ProductRequest[], filterType: string): ProductRequest[] => {
  switch (filterType) {
    case filterTypes.all: {
      return data;
    }
    case filterTypes.ui: {
      return data.filter((request: ProductRequest) => request.category === 'ui');
    }
    case filterTypes.ux: {
      return data.filter((request: ProductRequest) => request.category === 'ux');
    }
    case filterTypes.enhancement: {
      return data.filter((request: ProductRequest) => request.category === 'enhancement');
    }
    case filterTypes.bug: {
      return data.filter((request: ProductRequest) => request.category === 'bug');
    }
    case filterTypes.feature: {
      return data.filter((request: ProductRequest) => request.category === 'feature');
    }
    default: {
      return data;
    }
  }
};

export default filterData;
