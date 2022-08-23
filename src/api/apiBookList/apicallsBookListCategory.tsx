import { fetchBooksFailure, fetchBooksRequest, fetchBooksSuccess } from '../../redux/bookList/bookListActions';
import { AppDispatch } from '../../redux/store';

export const fetchBooksByCategory = (bookCategory:string):any => {
    const userid = sessionStorage.getItem('logedinUserId');

    return async(dispatch:AppDispatch) => {
        let bookFindQuery = (bookCategory === 'all' ?
            process.env.REACT_APP_JSON_PATH + '/bookDetails' :
            process.env.REACT_APP_JSON_PATH + '/bookDetails?category=' + bookCategory);
        dispatch(fetchBooksRequest());
        let responceAllBook =await fetch(bookFindQuery)
        let dataAllBook = await responceAllBook.json();

        let responceTakenBooks = await fetch(`${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${userid}`)
        let dataTakenBook = await responceTakenBooks.json();

        let takenBooksId = dataTakenBook.map((item: any) => item['bookId']);


        let dataAllBookFinal= [];
        for (let i in dataAllBook){
            if(!takenBooksId.includes(dataAllBook[i]['id'])){
                dataAllBookFinal.push(dataAllBook[i])
            }
            
        }
        dispatch(fetchBooksSuccess(dataAllBookFinal));

    };
};