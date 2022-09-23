import axios from 'axios';
import { Dispatch } from 'redux';
import {
    fetchTakenBooksFailure,
    fetchTakenBooksRequest,
    fetchTakenBooksSuccess
} from '../../redux/booksTaken/booksTakenActions';
import { AppDispatch } from '../../redux/store';

// const userid = sessionStorage.getItem('logedinUserId');


export const fetchTakenBooks = (): any => {
    const userid = sessionStorage.getItem('logedinUserId');

    return (dispatch: AppDispatch) => {
        dispatch(fetchTakenBooksRequest());

        // fetch(`${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${userid}`)
        //     .then(res => res.json())
        //     .then((data) => {
        //         dispatch(fetchTakenBooksSuccess(data));
        //     })
        //     .catch(error => { dispatch(fetchTakenBooksFailure("Error occoured")) });

        axios.get('http://localhost:3001/books_taken', {
            params: {
                logedInUser: userid
            }
        })
            .then(result => {
                dispatch(fetchTakenBooksSuccess(result.data.result));
            })
            .catch(error => { dispatch(fetchTakenBooksFailure("Error occoured")) });
    };
};

export const removeTakenBooks = (key: number, listKey: number | undefined): any => {
    const userid = sessionStorage.getItem('logedinUserId');

    return async (dispatch: Dispatch) => {
        console.log("ENTERED removeTakenBooks", userid, key);

        dispatch(fetchTakenBooksRequest());
        await axios.post('http://localhost:3001/books_taken/return_book', { userId: userid, bookId: key })
            .then(res => {
                console.log("updatedTakenList ", res.data.result);
                dispatch(fetchTakenBooksSuccess(res.data.result));
            })

        
        // //remove book from takenbooklist
        // await fetch(process.env.REACT_APP_JSON_PATH + '/booksTaken/' + key, {
        //     method: 'DELETE',
        // });

        // // --------------------------------------------------------------
        // // UPDATE THE COUNT IN BOOK DETAILS

        // //Taking Previous count
        // dispatch(fetchTakenBooksRequest());

        // let actualBookListCount = await fetch(`${process.env.REACT_APP_JSON_PATH}/bookDetails?id=${listKey}`)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         return data[0].count;
        //     });



        // const newBookCount = actualBookListCount + 1;

        // //updating count


        // await fetch(process.env.REACT_APP_JSON_PATH + '/bookDetails/' + listKey, {
        //     method: 'PATCH',
        //     body: JSON.stringify({ count: newBookCount }),
        //     headers: { 'Content-Type': 'application/json' }
        // });

        // // --------------------------------------------------------------

        // //fetching taken booklist again after removing a book
        // await fetch(`${process.env.REACT_APP_JSON_PATH}/booksTaken?userId=${userid}`)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         dispatch(fetchTakenBooksSuccess(data));
        //     });

    };
};