import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AuthProvider } from '../components/auth';

import store from '../redux/store';

import Login from '../components/login/login';
import Signup from '../components/signup/signup';
import { RequireAuth } from '../components/requireauth';
import MainPage from '../components/mainpage/mainpage';
import Booklist from '../components/booklist/booklist';
import BookSearchResult from '../components/booksearchresult/booksearchresult';
import Gallery from '../components/gallery/gallery';
import Aboutus from '../components/aboutus/aboutus';
import BooksTaken from '../components/bookstaken/bookstaken';
import Footer from '../components/footer/footer';

function RoutingPage() {
    return (
        <div>
            <AuthProvider>
                <Provider store={store}>
                    <Router>
                        <div className='App'>
                            <Switch>
                                <Route exact path='/'>
                                    <Login></Login>
                                </Route>
                                <Route path='/signup'>
                                    <Signup></Signup>
                                </Route>
                                <RequireAuth>
                                    <Route path='/userhome'>
                                        <div>
                                            <MainPage></MainPage>
                                            <div className="container">
                                                <Route exact path={'/userhome/'}>
                                                    <Booklist></Booklist>
                                                </Route>
                                                <Route exact path={'/userhome/booksearchresult'}>
                                                    <BookSearchResult></BookSearchResult>
                                                </Route>
                                                <Route exact path={'/userhome/gallery'}>
                                                    <Gallery></Gallery>
                                                </Route>
                                                <Route path={'/userhome/aboutus'}>
                                                    <Aboutus></Aboutus>
                                                </Route>
                                                <Route path={'/userhome/bookstaken'}>
                                                    <BooksTaken></BooksTaken>
                                                </Route>
                                            </div>
                                            <Footer></Footer>
                                        </div>
                                    </Route>

                                </RequireAuth>

                            </Switch>
                        </div>
                    </Router>
                </Provider>
            </AuthProvider>
        </div>
    );
}

export default RoutingPage;