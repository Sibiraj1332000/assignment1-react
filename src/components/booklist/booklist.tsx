import './booklist.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookCard from '../bookcard/bookcard';
import { fetchBooks } from '../../api/apiBookList/apiCallsBookList';
import { fetchBooksByCategory } from '../../api/apiBookList/apicallsBookListCategory';
import { addBookCategory } from '../../redux/bookList/bookListActions';
import { BookListDisplayType } from '../../Interface/Interface';
import { RootState } from '../../redux/store';
import { fetchCategoryList } from '../../api/apiBookList/apiCallFetchCategory';
// import { fetchCategoryList } from '../../api/apiBookList/apiCallFetchCategory';


function Booklist() {
    const bookData = useSelector((state: RootState) => state.bookList);
    // const [bookCategories,setBookCategories] = useState<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
        dispatch(fetchCategoryList())
        // let cat = fetchCategoryList();
        // setBookCategories(cat)

    }, []);


    const handlecategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let bookCategorySelect = event.target.value;
        dispatch(addBookCategory(bookCategorySelect));

        dispatch(fetchBooksByCategory(bookCategorySelect));

    };

    return bookData.loading ? (
        <p>Loading...</p>
    ) : bookData.error ? (
        <p>{bookData.error}</p>
    ) : (
        <div>

            <div className='title-box'>
                <div className='title-box-left'>
                    <h2 className='book-title'>BOOKS</h2>
                </div>
                <div className='title-box-right'>

                    <select
                        id='book-type'
                        value={bookData.bookCategory}
                        onChange={(event) => handlecategory(event)}
                    >
                        {bookData.bookCatgegoryList && bookData.bookCatgegoryList.map((item: any) => {
                            return (
                                <option key={item.id} value={item.category}>{item.category}</option>
                            );
                        })}

                    </select>

                </div>
            </div>
            <div className='book-list'>
                {bookData.books && bookData.books.map((item: any) => {
                    console.log(bookData);
                    
                    return (
                        <BookCard
                            key={item.id}
                            bookId={item.id}
                            bookName={item.bookName}
                            bookAuther={item.auther}
                            bookImage={item.bookImage}
                            count={item.count}
                        ></BookCard>
                    );
                })}
            </div>
        </div>
    );
}

export default Booklist;