import productReducer from './ProductsReducer'
import employeeReducer from './EmployeeReducer'
import { combineReducers } from 'redux';
export default combineReducers({
    productReducer,
    employeeReducer
});