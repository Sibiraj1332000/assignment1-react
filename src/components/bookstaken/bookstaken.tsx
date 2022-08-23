import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTakenBooks } from '../../api/apiBooksTaken/apiCallsBookTaken';
import { RootState } from '../../redux/store';

import BookCard from '../bookcard/bookcard';
import './bookstaken.css';

type BooksTakenItemType = {
    auther: string,
    bookId: number,
    bookImage: string,
    bookName: string,
    id: number,
    userId: number
}

function BooksTaken() {

    const dispatch = useDispatch();
    const bookData = useSelector((state: RootState) => state.userTakenBook.takenBooks);


    useEffect(() => {
        dispatch(fetchTakenBooks());
    }, [dispatch]);


    return (
        <div>
            <h2 className='book-title'>BOOKS TAKEN</h2>
            <div className='book-list'>
                {bookData && bookData.map((item: BooksTakenItemType, index: number) => {
                    return (
                        <BookCard
                            key={index}
                            bookId={item.id}
                            bookListId={item.bookId}
                            bookName={item.bookName}
                            bookAuther={item.auther}
                            bookImage={item.bookImage}
                            loginUserId={Number(sessionStorage.getItem('logedinUserId'))}
                            status='return'
                        ></BookCard>
                    );
                })}
            </div>
        </div>
    );
}

export default BooksTaken;