import { combineReducers } from 'redux';
import aboutUsReducer from './aboutUs/aboutUsReducer';
import authenticateReducer from './authenticate/authenticateReducer';
import bookCardReducer from './bookCard/bookCardReducer';
import bookListReducer from './bookList/bookListReducer';
import bookSearchReducer from './bookSearch/bookSearchReducer';
import booksTakenReducer from './booksTaken/booksTakenReducer';

const rootReducer = combineReducers({
    bookList:bookListReducer,
    authenticateUser:authenticateReducer,
    userTakenBook:booksTakenReducer,
    bookListCard:bookCardReducer,
    aboutUSTable:aboutUsReducer,
    findTheBook:bookSearchReducer
});

export default rootReducer;