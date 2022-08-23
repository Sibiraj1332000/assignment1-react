import { BookActionBookType } from '../../Interface/Interface';
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, ADD_BOOK_CATEGORY, FETCH_BOOK_CATEGORYS } from './bookListTypes';


export const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    };
};

export const fetchBooksSuccess = (books: BookActionBookType[]) => {

    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    };
};

export const fetchBooksFailure = (error: string) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    };
};

export const addBookCategory = (bookCategory: string) => {
    return {
        type: ADD_BOOK_CATEGORY,
        payload: bookCategory
    };
};

export const fetchBookCategories = (list:any)=>{
    return{
        type:FETCH_BOOK_CATEGORYS,
        payload:list
    }
}