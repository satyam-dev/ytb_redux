import store from './store';

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'ADD_USER',
    payload: {
        name: 'Binod'
    }
});
store.dispatch({
    type: 'ADD_USER',
    payload: {
        name: 'John'
    }
});

store.dispatch({
    type: 'DELETE_USER',
    payload: {
        id: 1
    }
})