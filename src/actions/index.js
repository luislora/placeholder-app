//Action Creatorexport 
import {types} from '../action_types/index';

export const increaseTodo = () => {
    return {
        type: types.INCREASE_TODO,
    }
}
