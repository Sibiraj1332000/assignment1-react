import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import BookCard from '../bookcard/bookcard';
import './booksearchresult.css';

function BookSearchResult() {

    const bookData = useSelector((state: RootState) => state.findTheBook.books);

    return (
        <div>

            <h2 className='book-title'>BOOKS </h2>
            <div className='book-list'>

                {bookData.map((item: { id: number, bookName: string, auther: string, bookImage: string }) => {
                    return (
                        <BookCard
                            key={item.id}
                            bookId={item.id}
                            bookName={item.bookName}
                            bookAuther={item.auther}
                            bookImage={item.bookImage}
                        ></BookCard>

                    );

                })}
            </div>
        </div>
    );
}


export default BookSearchResult;