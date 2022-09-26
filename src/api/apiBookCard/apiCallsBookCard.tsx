import { updateBookPickCount } from '../../redux/bookCard/bookCardActions';
import { AppDispatch } from '../../redux/store';
import { TakeBookType } from '../../Interface/Interface';
import axios from 'axios';
import { fetchTakenBooksCount } from '../../redux/booksTaken/booksTakenActions';

// type TakeBookReturnType = function(dispatch: Dispatch)=> nul

export const takeBook = (bookInfo: TakeBookType): any => {
    return async (dispatch: AppDispatch) => {

        const takeBookDoc = {
            bookId: bookInfo.bookId,
            userId: bookInfo.userId
        };

        const result = await axios.post('http://localhost:3001/book_list/take_book',takeBookDoc);
        console.log("kjkjkjkjkj",result.data.updatedCount[0].count);
        dispatch(updateBookPickCount(result.data.updatedCount[0].count));
        const userId= sessionStorage.getItem('logedinUserId');
        console.log("jgjgjgjgjjgjjffffff",userId);
        
            axios.get('http://localhost:3001/books_taken/takenbooks_count', {
                params: {
                    userId:userId
                }
            }).then(res => {
                console.log("hghghghhghhgghghgghhhg ", res.data.bookCount);
                dispatch(fetchTakenBooksCount(res.data.bookCount))

            })
        


        // const checkBookTakenQuery = `${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${bookInfo.userId}&bookId=${bookInfo.bookId}`;
        // const res = await fetch(checkBookTakenQuery);
        // const data = await res.json();

        // if (data.length === 0 && bookInfo.bookCount !== 0) {
        //     const takenBookDoc = {
        //         bookId: bookInfo.bookId,
        //         userId: bookInfo.userId,
        //         bookName: bookInfo.bookName,
        //         auther: bookInfo.auther,
        //         bookImage: bookInfo.bookImage
        //     };

        //     const newCount = bookInfo.bookCount - 1;
        //     dispatch(updateBookPickCount(newCount));

        //     await fetch(process.env.REACT_APP_JSON_PATH + '/bookDetails/' + bookInfo.bookId, {
        //         method: 'PATCH',
        //         body: JSON.stringify({ count: newCount }),
        //         headers: { 'Content-Type': 'application/json' }
        //     });

        //     await fetch(process.env.REACT_APP_JSON_PATH + '/booksTaken', {
        //         method: 'POST',
        //         body: JSON.stringify(takenBookDoc),
        //         headers: { 'Content-Type': 'application/json' }
        //     });
        // }

    };
};