import { PRE_REQUEST, POST_REQUEST, SET_EMPLOYEE } from '../utils/Constants'

export const getEmployeeResponse = (employee) => ({
  type: SET_EMPLOYEE,
  data: employee,
});

export const preRequest = () => ({
  type: PRE_REQUEST,
});

export const postRequest = () => ({
  type: POST_REQUEST,
});

export function createEmployee(name = "", salary = "", age = "") {
    return function (dispatch) {
    dispatch(preRequest())
    const eBody = JSON.stringify({
      name: name,
      salary: salary,
      age: age,
    });
     return fetch(`http://dummy.restapiexample.com/api/v1/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: eBody
        })

        .then(response => response.body)
        .then((json) => {
          dispatch(getEmployeeResponse(json));
        })
        .catch( error => console.log('An error occurred.', error));
    };
}
