
import { fetchSearchFailure, fetchSearchSuccess } from '../../redux/bookSearch/bookSearchActions';
import { AppDispatch } from '../../redux/store';


export const fetchBookByKeyword = (bookFilterText: string): any => {

    return (dispatch: AppDispatch) => {

        let bookFindQuery = bookFilterText !== ''
            ? ('http://localhost:8000/bookDetails?q=' + bookFilterText)
            : 'http://localhost:8000/bookDetails';

        fetch(bookFindQuery)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                dispatch(fetchSearchSuccess(data))
            })
            .catch(err => {
                dispatch(fetchSearchFailure(err))
            })

    }
}