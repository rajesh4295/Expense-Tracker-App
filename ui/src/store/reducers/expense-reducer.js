import {ADD_EXPENSE,UPDATE_EXPENSE,DELETE_EXPENSE} from '../constants/action-constants';
import {dummy_data} from '../dummy-data';
const initialState = dummy_data;

export default function expenseReducer (state = initialState, action){
    let newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case ADD_EXPENSE : {
                            newState.expenses.push(action.payload);
                            return newState;
                            }
        case UPDATE_EXPENSE: {
                                let pos = newState.expenses.map(e =>e.id).indexOf(action.payload.id)
                               console.log(pos)
                                if(pos > -1){
                                    newState.expenses[pos] = action.payload;
                                    console.log(newState)
                                    return newState
                                }
                            }
        case DELETE_EXPENSE:{ 
                                let pos = newState.expenses.map(e =>e.id).indexOf(action.payload.id)
                                if(pos > -1){
                                    newState.expenses.splice(pos,1);
                                    return newState
                                } 
                            }                    
        default: return newState;
    }
}