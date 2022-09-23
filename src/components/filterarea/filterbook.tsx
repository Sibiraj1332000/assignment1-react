import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchBookByKeyword } from '../../api/apiBookSearch/apiCallsBookSearch';
import './filterbook.css';

const Filterbook = () => {

    const [filterText, setFilterText] = useState<string>('');
    const myHistory = useHistory();
    const dispatch = useDispatch()

    const handleSearch = (event: any) => {
        event.preventDefault();
        dispatch(fetchBookByKeyword(filterText));
        myHistory.push(`/userhome/booksearchresult`);

    };

    return (

        <div className='filter-area'>
            <div className='filter-box'>
                <form>
                    <input
                        type='text'
                        className='filter-text'
                        placeholder='Search'
                        onChange={event => setFilterText(event.target.value)}
                    />
                    <button
                        className='filter-btn'
                        onClick={(event) => handleSearch(event)}
                    >Search</button>
                </form>
            </div>
        </div>

    );
};

export default Filterbook;