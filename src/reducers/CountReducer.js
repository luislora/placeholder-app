import {types} from '../action_types/index';
const defaultState = { count: 0};

export default function CountReducer(state = defaultState, action) {
    const count = state.count;
    
    switch (action.type) {
    case types.INCREASE_TODO:
        return {count: Number(count) + 1};
    default:
        return state;
    }
}