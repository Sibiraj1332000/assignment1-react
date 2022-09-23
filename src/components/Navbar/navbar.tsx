import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

// import { MenuItems } from './menuItems';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/authenticate/authenticateActions';



const Navbar = () => {

    const dispatch = useDispatch();
    let { path } = useRouteMatch();

    const [menuItems, setMenuItems] = useState<{ title: string, url: string, cname: string }[]>()

    useEffect(() => {
        fetch(process.env.REACT_APP_JSON_PATH + '/MenuItems')
            .then(res => res.json())
            .then(data => {
                setMenuItems(data)
            })
    },[])

    const myHistory = useHistory();
    let handleLogOut = () => {
        dispatch(userLogout());

        // localStorage.clear();
        window.sessionStorage.clear();
        window.localStorage.clear();
        myHistory.push('/');
    };

    return (
        <nav className='navbar-items'>
            <div className='container navbar-align'>
                <div className='logo-main'>
                    <img src='http://127.0.0.1:8080/library-main-logo.png' alt='' />
                </div>
                <ul className='navbar-item-list'>
                    {
                        menuItems && menuItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cname}>
                                    <Link to={`${path}${item.url}`}> {item.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className='login-div'>

                    <button className='menu-login' onClick={handleLogOut}>
                        LogOut
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
