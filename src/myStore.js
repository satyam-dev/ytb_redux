export default function createStore(reducer) {

    let state;
    let listeners = [];
    function dispatch(action) {
        state = reducer(state, action);

        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    function subscribe(listener) {
        listeners.push(listener);
    }

    function getState() {
        return state;
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}