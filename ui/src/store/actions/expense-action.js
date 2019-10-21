import {ADD_EXPENSE,UPDATE_EXPENSE,DELETE_EXPENSE} from '../constants/action-constants';

export function ADD_EXPENSE_ACTION (payload){
    return {
        type: ADD_EXPENSE, 
        payload: payload
    }
}

export function EDIT_EXPENSE_ACTION (payload){
    return {
        type: UPDATE_EXPENSE, 
        payload: payload
    }
}

export function DELETE_EXEPENSE_ACTION (payload){
    return {
        type: DELETE_EXPENSE, 
        payload: payload
    }
}