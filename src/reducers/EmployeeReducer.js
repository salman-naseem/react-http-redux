import { PRE_REQUEST, POST_REQUEST, SET_EMPLOYEE } from '../utils/Constants'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EMPLOYEE:
      // console.log(action)
      return {...state, loading: false, employee:action.data};
    case PRE_REQUEST:
        return { ...state, loading: true };
    case POST_REQUEST:
        return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
// { ...state, products: action.products };