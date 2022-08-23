import { BookSearchResultType } from "../../Interface/Interface";
import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_SUCCESS } from "./bookSearchTypes";


export const fetchSearchSuccess = (books: BookSearchResultType[]) => {

    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: books
    };
};

export const fetchSearchFailure = (error: string) => {
    return {
        type: FETCH_SEARCH_FAILURE,
        payload: error
    };
};
