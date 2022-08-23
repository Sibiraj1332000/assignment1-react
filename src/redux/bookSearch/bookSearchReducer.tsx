import { SearchSuccessReturnType } from "../../Interface/Interface"
import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_SUCCESS } from "./bookSearchTypes"

const initialState = {
    books: [],
    error: ''
}

const bookSearchReducer = (state = initialState, action: SearchSuccessReturnType): any => {
    switch (action.type) {
        case FETCH_SEARCH_SUCCESS:
            return{
                ...state,
                books:action.payload
            }
            case FETCH_SEARCH_FAILURE:
            return{
                ...state,
                books:action.payload
            }
        default: return state
    }
}


export default bookSearchReducer