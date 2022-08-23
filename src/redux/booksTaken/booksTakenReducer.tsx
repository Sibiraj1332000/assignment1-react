import { BooksTakenActionsReturnType, BooksTakenInitType, BooksTakenReturnType } from '../../Interface/Interface';
import { FETCH_TAKEN_BOOKS_FAILURE, FETCH_TAKEN_BOOKS_REQUEST, FETCH_TAKEN_BOOKS_SUCCESS } from './booksTakenTypes';


const initialState = {
    loading: false,
    takenBooks: null,
    error: ''
};

const booksTakenReducer = (state: BooksTakenInitType = initialState, action: BooksTakenActionsReturnType): BooksTakenReturnType => {
    switch (action.type) {
        case FETCH_TAKEN_BOOKS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TAKEN_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                takenBooks: action.payload,
                error: ''
            };
        case FETCH_TAKEN_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default: return state;
    }
};


export default booksTakenReducer;