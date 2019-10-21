import { createStore } from "redux";

const initialState = {
    username: "",
    FavShow: ''
}

//constants
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_FAVSHOW = 'UPDATE_FAVSHOW';

function reducer(state = initialState, action) {
    //requier initialState
    switch(action.type) {
        case UPDATE_USERNAME: 
            return {
                ...state,
                username: action.payload
            };
        case UPDATE_FAVSHOW:
            // console.log({
            //     ...state,
            //     FavShow: action.payload
            // })
            return {
                ...state,
                FavShow: action.payload
            }
        default: return state;
    }
}

export default createStore(reducer); //requires reducer as a paramater