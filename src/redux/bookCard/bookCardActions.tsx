import { UpdataeBookPicCountreturnType } from '../../Interface/Interface';
import { UPDATE_BOOK_PICK_COUNT } from './bookCardType';


export const updateBookPickCount = (count:number):UpdataeBookPicCountreturnType => {
    return{
        type:UPDATE_BOOK_PICK_COUNT,
        payload:count
    };
};