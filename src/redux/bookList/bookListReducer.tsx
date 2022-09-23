import { BookListActionReturnType, BookListReducerType } from '../../Interface/Interface';
import { ADD_BOOK_CATEGORY, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOK_CATEGORYS } from './bookListTypes';


const initialState = {
    loading: false,
    books: [],
    error: '',
    bookCategory: '',
    bookCatgegoryList:''
};

const bookListReducer = (state:BookListReducerType = initialState, action:BookListActionReturnType):any => {
    
    switch (action.type) {
    case FETCH_BOOKS_REQUEST:
        return {
            ...state,
            loading: true
        };
    case FETCH_BOOKS_SUCCESS:
        return {
            ...state,
            loading: false,
            books: action.payload,
            error: ''
        };
    case FETCH_BOOKS_FAILURE:
        console.log("kkkkg");
        
        return {
            ...state,
            loading: false,
            books: [],
            error: action.payload
        };
    case ADD_BOOK_CATEGORY:
        return {
            ...state,
            bookCategory: action.payload
        };
    case FETCH_BOOK_CATEGORYS:
        return{
            ...state,
            bookCatgegoryList:action.payload

        }
    default: return state;
    }
};

export default bookListReducer;