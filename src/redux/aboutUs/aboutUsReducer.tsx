import { AboutUsInitialStateType } from "../../Interface/Interface";
import {
    FETCH_ABOUTUS_CHILDREN_SUCCESS,
    FETCH_ABOUTUS_FAILURE,
    FETCH_ABOUTUS_GENERAL_SUCCESS,
    FETCH_ABOUTUS_REQUEST
} from "./aboutUsType";




const initialState = {
    loading: false,
    generalBook: null,
    childBook: null,
    error: ''
};


const aboutUsReducer = (state: AboutUsInitialStateType = initialState, action: any): AboutUsInitialStateType => {
    switch (action.type) {
        case FETCH_ABOUTUS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ABOUTUS_GENERAL_SUCCESS:
            return {
                ...state,
                loading: false,
                generalBook: action.payload
            };
        case FETCH_ABOUTUS_CHILDREN_SUCCESS:
            return {
                ...state,
                loading: false,
                childBook: action.payload
            };
        case FETCH_ABOUTUS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default: return state;
    }
}

export default aboutUsReducer;