import { updateBookPickCount } from '../../redux/bookCard/bookCardActions';
import { AppDispatch } from '../../redux/store';
import { TakeBookType } from '../../Interface/Interface';

// type TakeBookReturnType = function(dispatch: Dispatch)=> nul

export const takeBook = (bookInfo: TakeBookType): any => {
    return async (dispatch: AppDispatch) => {
        const checkBookTakenQuery = `${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${bookInfo.userId}&bookId=${bookInfo.bookId}`;
        const res = await fetch(checkBookTakenQuery);
        const data = await res.json();

        if (data.length === 0 && bookInfo.bookCount !== 0) {
            const takenBookDoc = {
                bookId: bookInfo.bookId,
                userId: bookInfo.userId,
                bookName: bookInfo.bookName,
                auther: bookInfo.auther,
                bookImage: bookInfo.bookImage
            };

            const newCount = bookInfo.bookCount - 1;
            dispatch(updateBookPickCount(newCount));

            await fetch(process.env.REACT_APP_JSON_PATH + '/bookDetails/' + bookInfo.bookId, {
                method: 'PATCH',
                body: JSON.stringify({ count: newCount }),
                headers: { 'Content-Type': 'application/json' }
            });

            await fetch(process.env.REACT_APP_JSON_PATH + '/booksTaken', {
                method: 'POST',
                body: JSON.stringify(takenBookDoc),
                headers: { 'Content-Type': 'application/json' }
            });
        }
    };
};