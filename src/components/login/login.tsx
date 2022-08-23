import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { userLogin } from '../../redux/authenticate/authenticateActions';
import { useDispatch } from 'react-redux';


function Login() {

    const myHistory = useHistory();
    let [userName, setUserName] = useState('');
    let [userPwd, setUserPwd] = useState('');

    const dispatch = useDispatch();

    const handleLogin = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (userName && userPwd) {

            const loginQuery = `http://localhost:8000/login?userName=${userName}&password=${userPwd}`;
            const res = await fetch(loginQuery);

            await res.json()
                .then((data) => {

                    if (data) {
                        console.log(data);
                        const userDetail: any = {
                            userName: userName,
                            userID: data[0].id
                        }
                        dispatch(userLogin(userDetail));
                        // userLogin(userName);
                        // localStorage.setItem('logedinUser', userName);
                        // localStorage.setItem('logedinUserId', data[0].id);
                        window.sessionStorage.setItem('logedinUser', userName);
                        window.sessionStorage.setItem('logedinUserId', data[0].id);

                        myHistory.push('/userhome');

                    }

                });
        }

    };

    return (
        <div className='login-page'>
            <div className='login-box'>
                <h1 className='login-title'>Login</h1>
                <p className='title-text'>Please enter your Username and Password</p>

                <form id='login-form'>
                    <input type='email' id='user-name' placeholder='UserName' className='login-field-style' onChange={(event) => { setUserName(event.target.value); }}/>
                    <input type='password' id='login-pwd' placeholder='Password' className='login-field-style' onChange={(event) => { setUserPwd(event.target.value); }} />

                    <div className='login-bottom'>
                        <Link to='/signup' className='signup-btn'>SignUp</Link>
                        <button className='login-btn' onClick={handleLogin}>Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
}



export default Login;