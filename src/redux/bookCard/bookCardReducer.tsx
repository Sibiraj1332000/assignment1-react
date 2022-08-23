import { BookCountType, UpdataeBookPicCountreturnType } from '../../Interface/Interface';
import { UPDATE_BOOK_PICK_COUNT } from './bookCardType';


const initialState = {
    bookCount: 0
};


const bookCardReducer = (state: BookCountType = initialState, action: UpdataeBookPicCountreturnType) => {
    switch (action.type) {
        case UPDATE_BOOK_PICK_COUNT:
            return {
                ...state,
                bookCount: action.payload
            };
            default: return state;
    }

};

export default bookCardReducer;