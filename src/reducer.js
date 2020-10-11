let count = 0;
export default function reducer(state = [], action) {
    if (action.type === 'ADD_USER') {
        return [
            ...state,
            {
                id: ++count,
                name: action.payload.name
            }
        ];
    }
    if (action.type === 'DELETE_USER') {
        return state.filter(user => user.id !== action.payload.id);
    }
    return state;
}