
import axios from 'axios';
import { fetchSearchFailure, fetchSearchSuccess } from '../../redux/bookSearch/bookSearchActions';
import { AppDispatch } from '../../redux/store';


export const fetchBookByKeyword = (bookFilterText: string): any => {

    return async (dispatch: AppDispatch) => {


        const userid = sessionStorage.getItem('logedinUserId');

        console.log("uuuuuuuuuu",userid,bookFilterText);

        await axios.get('http://localhost:3001/search/search_text',{
            params:{
                userId:userid,
                searchText:bookFilterText
            }
        }).then(result=>{
            console.log(result.data.bookData)
            dispatch(fetchSearchSuccess(result.data.bookData))
        })
        .catch(err=>{
            dispatch(fetchSearchFailure(err))
        })
        

        // let bookFindQuery = bookFilterText !== ''
        //     ? ('http://localhost:8000/bookDetails?q=' + bookFilterText)
        //     : 'http://localhost:8000/bookDetails';

        // fetch(bookFindQuery)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         dispatch(fetchSearchSuccess(data))
        //     })
        //     .catch(err => {
        //         dispatch(fetchSearchFailure(err))
        //     })

    }
}