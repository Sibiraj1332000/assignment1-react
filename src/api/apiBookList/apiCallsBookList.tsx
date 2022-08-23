import { fetchBooksFailure, fetchBooksRequest, fetchBooksSuccess } from '../../redux/bookList/bookListActions';
import { AppDispatch } from '../../redux/store';

export const fetchBooks = (): any => {
    const userid = sessionStorage.getItem('logedinUserId');
    return async (dispatch: AppDispatch) => {
        let bookFindQuery: string | undefined = process.env.REACT_APP_JSON_PATH + '/bookDetails';

        dispatch(fetchBooksRequest());
       

        let responceAllBook = await fetch(bookFindQuery);
        let dataAllBook = await responceAllBook.json();

        console.table(dataAllBook);

        let responceTakenBooks = await fetch(`${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${userid}`)
        let dataTakenBook = await responceTakenBooks.json();

        console.table(dataTakenBook);
        let takenBooksId = dataTakenBook.map((item: any) => item['bookId']);

        console.log("takenBooksId : ", takenBooksId);
        
        let dataAllBookFinal= [];
        for (let i in dataAllBook){
            if(!takenBooksId.includes(dataAllBook[i]['id'])){
                dataAllBookFinal.push(dataAllBook[i])
            }
            
        }
        dispatch(fetchBooksSuccess(dataAllBookFinal));



    };
};

