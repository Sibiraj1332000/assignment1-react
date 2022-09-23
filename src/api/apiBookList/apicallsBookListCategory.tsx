import axios from 'axios';
import { fetchBooksRequest, fetchBooksSuccess } from '../../redux/bookList/bookListActions';
import { AppDispatch } from '../../redux/store';

export const fetchBooksByCategory = (bookCategory: string): any => {
    const userid = sessionStorage.getItem('logedinUserId');

    return async (dispatch: AppDispatch) => {
        console.log("The category:  ",bookCategory);

        dispatch(fetchBooksRequest());

        await axios.get('http://localhost:3001/search/category',{
            params:{
                userId:userid,
                category:bookCategory
            }
        })
        .then(result=>{
            console.log("BOOK CATEGORY : ",result.data.bookData);
            dispatch(fetchBooksSuccess(result.data.bookData));
            
        })

        
        // let bookFindQuery = (bookCategory === 'all' ?
        //     process.env.REACT_APP_JSON_PATH + '/bookDetails' :
        //     process.env.REACT_APP_JSON_PATH + '/bookDetails?category=' + bookCategory);
        // dispatch(fetchBooksRequest());

        // // Fetching all books
        // let responceAllBook = await fetch(bookFindQuery)
        // if (!responceAllBook.ok ){
        //     console.log(responceAllBook.statusText);            
        // }
        // let dataAllBook = await responceAllBook.json();

        // // Fetching the taken books
        // let responceTakenBooks = await fetch(`${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${userid}`)
        // if (responceTakenBooks.status !== 200){
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
        // dispatch(fetchBooksSuccess(dataAllBookFinal));

    };
};