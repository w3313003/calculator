import { combineReducers } from 'redux';
import { ADD, DECREASE, MULTIPLY, DIVISION, CLEAR } from './action/action_types';
const initState = {
    result: 0,
    content: [0]
};
const MainReducer = (state: any = initState, action: Inspect.ActionInspect) => {
    const { type, payload } = action;
    switch (type) {
        case ADD:
            return { ...state, result: state.result + payload };
        case DECREASE:
            return state;
        case MULTIPLY:
            return state;
        case DIVISION:
            return state;
        case CLEAR:
            return { ...initState };
        default:
            return state;
    }
};

export default combineReducers({ MainReducer });