import axios from 'axios';
import { fetchBooksRequest, fetchBooksSuccess } from '../../redux/bookList/bookListActions';
import { AppDispatch } from '../../redux/store';

export const fetchBooks = (): any => {
    const userid = sessionStorage.getItem('logedinUserId');
    return async (dispatch: AppDispatch) => {
        // let bookFindQuery: string | undefined = process.env.REACT_APP_JSON_PATH + '/bookDetails';

        dispatch(fetchBooksRequest());

        // // Fetching all books
        // let responceAllBook = await fetch(bookFindQuery);
        // if (!responceAllBook.ok) {
        //     console.log(responceAllBook.statusText);
        // }
        // let dataAllBook = await responceAllBook.json();

        // // fetching taken book
        // let responceTakenBooks = await fetch(`${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${userid}`)
        // if (!responceTakenBooks.ok) {
        //     console.log(responceTakenBooks.statusText);
        // }
        // let dataTakenBook = await responceTakenBooks.json();

        // // Makin an array of taken books id
        // let takenBooksId = dataTakenBook.map((item: any) => item['bookId']);

        // // Removing taken books from all books
        // let dataAllBookFinal = [];
        // for (let i in dataAllBook) {
        //     if (!takenBooksId.includes(dataAllBook[i]['id'])) {
        //         dataAllBookFinal.push(dataAllBook[i])
        //     }

        // }

        await axios.get('http://localhost:3001/book_list', {
            params: {
                logedInUser: userid
            }
        })
            .then(result => {
                console.log("hello",result.data.result);

                dispatch(fetchBooksSuccess(result.data.result));
            });



    };
};

