import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { takeBook } from '../../api/apiBookCard/apiCallsBookCard';
import { fetchBooks } from '../../api/apiBookList/apiCallsBookList';
import { removeTakenBooks } from '../../api/apiBooksTaken/apiCallsBookTaken';
import { BookCardTypes, TakeBookType } from '../../Interface/Interface';
import './bookcard.css';


function BookCard(props: BookCardTypes) {
    const [bookCount, setBookCount] = useState<number>(props.count);
    const [buttonDisable, setButtonDisable] = useState<boolean>(false)
    const dispatch = useDispatch();


    const handlePickBook = async (event: React.MouseEvent<HTMLButtonElement>, key: number) => {
        setButtonDisable(true)


        event.preventDefault();
        const userId = parseInt(window.sessionStorage.getItem('logedinUserId') || '{}');
        const bookName = props.bookName;
        const auther = props.bookAuther;
        const bookImage = props.bookImage;

        const takenBookDoc: TakeBookType = {
            bookId: key,
            userId: userId,
            bookName: bookName,
            auther: auther,
            bookImage: bookImage,
            bookCount: props.count

        }
        dispatch(takeBook(takenBookDoc));
        props.count ? setBookCount(props.count - 1) : console.log();
        // dispatch(fetchBooks());

    };

    const handleReturnBook = async (key: number, listKey: number | undefined, loginUID: number | undefined) => {
        dispatch(removeTakenBooks(key, listKey));

    };

    return (
        <div className='cards'>
            <div className='bookcard-image-box'>
                <img src={props.bookImage} alt='' />
            </div>
            <div className='details'>
                <div className='book-details'>
                    <p className='book-name'>{props.bookName}</p>
                    <p className='book-auther'>{props.bookAuther}</p>
                </div>
                <div className='button-div'>
                    {bookCount > 0
                        && <p
                            className='book-avail'
                            style={{ 'width': '130px', 'textAlign': 'center' }}>{bookCount} Books left</p>}
                    {bookCount <= 0
                        && <p className='book-out-of-stock'>Out of Stock</p>}
                    {props.status !== 'return'
                        && <button
                            onClick={(event) => handlePickBook(event, props.bookId)}
                            style={{ 'width': '130px', 'textAlign': 'center' }}
                            disabled={buttonDisable}>Pick Book</button>}
                    {props.status === 'return'
                        && <button
                            onClick={() => handleReturnBook(props.bookId, props.bookListId, props.loginUserId)}
                            style={{ 'width': '130px', 'textAlign': 'center', 'height': '35px' }}>Return Book</button>}
                </div>
            </div>
        </div>
    );
}

export default BookCard;