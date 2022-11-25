import * as ActionTypes from './ActionTypes';
import { url } from '../util/url';

//1
export const fetchStaffs = () => (dispatch) => {
    // console.log("hello")
    dispatch(staffsLoading(true)); 

    return fetch(url + 'staffs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)));
}

export const staffsLoading = () => (
    {
        type: ActionTypes.STAFFS_LOADING
    }
)
export const addStaffs = (staffs) => (
    {
        type: ActionTypes.ADD_STAFFS,
        payload: staffs
    }
)
export const staffsFailed = (errmess) => (
    {
        type: ActionTypes.STAFFS_FAILED,
        payload: errmess
    }
)

//2
export const fetchDepartments = () => (dispatch) => {
    // console.log("hello")
    dispatch(departmentsLoading(true));
    return fetch(url + 'departments')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then(response => response.json())
    .then(departments => dispatch(addDepartments(departments)))
    .catch(error => dispatch(departmentsFailed(error.massage)))
}

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
})

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
})

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
})

//3
export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));
    return fetch(url + 'staffsSalary')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then(response => response.json())
    .then(salary => dispatch(addSalary(salary)))
    .catch(error => dispatch(salaryFailed(error)))

}

export const salaryLoading = () =>( {
    type: ActionTypes.SALARY_LOADING
})

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
})

export const salaryFailed = (errmess) =>( {
    type: ActionTypes.SALARY_FAILED,
    payload: errmess
})