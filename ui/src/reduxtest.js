const {createStore} = require('redux');

let initialState = {
    age:21
}

const reducer = (state = initialState, action) => {
    let newState = {...state};
    if(action.type === 'add'){
        newState.age += 1;
    }else if(action.type === 'subtract'){
        newState.age -= 1;
    }
    return newState;
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log("state changed" + JSON.stringify(store.getState()));
});

store.dispatch({type:'add'});
store.dispatch({type:'add'});
store.dispatch({type:'add'});
store.dispatch({type:'subtract'});