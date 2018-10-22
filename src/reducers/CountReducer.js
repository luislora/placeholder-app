import {types} from '../action_types/index';
const defaultState = { count: 0, wish_value: 0};

export default function CountReducer(state = defaultState, action) {
    const count = state.count
    const wish_value = action.wish_value
    
    switch (action.type) {
        case types.INCREASE_TODO:
            return {count: Number(count) + 1}
        case types.UPDATE_TODO:
            return { count: wish_value }
        default:
            return state
    }
}