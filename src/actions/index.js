//Action Creatorexport 
import {types} from '../action_types/index';

export const increaseTodo = () => {
    return {
        type: types.INCREASE_TODO,
    }
}

export const updateTodo = (wish_value) => {
    return {
        type: types.UPDATE_TODO,
        wish_value: wish_value,
    }
}