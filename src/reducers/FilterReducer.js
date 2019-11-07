import { SORT_BY_AMOUNT, DEFAULT } from '../utils/Constants';

const filtersReducerDefaultState = {
  sortBy: 'default'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };
    case DEFAULT:
      return {
        ...state,
        sortBy: 'default'
      };
    default:
      return state;
  }
};