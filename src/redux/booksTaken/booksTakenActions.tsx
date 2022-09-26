import { BooksTakenActionsReturnType, BooksTakenSuccessType } from '../../Interface/Interface';
import { FETCH_TAKEN_BOOKS_COUNT, FETCH_TAKEN_BOOKS_FAILURE, FETCH_TAKEN_BOOKS_REQUEST, FETCH_TAKEN_BOOKS_SUCCESS } from './booksTakenTypes';


export const fetchTakenBooksRequest = ():BooksTakenActionsReturnType => {
    return {
        type: FETCH_TAKEN_BOOKS_REQUEST
    };
};

export const fetchTakenBooksSuccess = (books: BooksTakenSuccessType):BooksTakenActionsReturnType => {
    return {
        type: FETCH_TAKEN_BOOKS_SUCCESS,
        payload: books
    };
};

export const fetchTakenBooksFailure = (error: string):any => {
    
    return {
        type: FETCH_TAKEN_BOOKS_FAILURE,
        payload: error
    };
};

export const fetchTakenBooksCount = (count:any):any=>{
    return {
        type: FETCH_TAKEN_BOOKS_COUNT,
        payload: count
    };
}