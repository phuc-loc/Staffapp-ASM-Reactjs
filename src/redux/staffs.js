import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
    isLoading: true,
    errMess: null,
    staffs: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_STAFFS:  //GET
            return {
                ...state,
                isLoading: false,
                errMess: null,
                staffs: action.payload
            }
            
        case ActionTypes.STAFFS_LOADING:
            return {
                ...state, errMess: null,
                staffs: [],
                isLoading: true
            }

        case ActionTypes.STAFFS_FAILED:
            return { ...state,
                 isLoading: false , 
                 staffs: [], 
                 errMess: action.payload
                }
        default: 
            return state
    }
}