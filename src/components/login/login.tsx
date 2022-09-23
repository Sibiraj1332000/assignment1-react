import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { userLogin } from '../../redux/authenticate/authenticateActions';
import { useDispatch } from 'react-redux';
import axios from "axios";


function Login() {

    const myHistory = useHistory();
    let [userName, setUserName] = useState('');
    let [userPwd, setUserPwd] = useState('');

    const dispatch = useDispatch();

    const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (!userName || !userPwd) {
            alert("Username and password required !!")
        }
        else {

            // const loginQuery = `http://localhost:8000/login?userName=${userName}&password=${userPwd}`;
            // const res = await fetch(loginQuery);
            axios.post('http://localhost:3001/auth/login-user', { userName, userPwd })
                .then(mydata => {
                    // console.log("mydata = ", mydata);
                    if (mydata.data.success) {
                        console.log("id  d ", mydata.data.result[0].id);
                        const userDetail: any = {
                            userName: userName,
                            userID: mydata.data.result[0].id
                        }
                        dispatch(userLogin(userDetail));
                        window.sessionStorage.setItem('logedinUser', userName);
                        window.sessionStorage.setItem('logedinUserId', mydata.data.result[0].id);
                        window.localStorage.setItem('accessKey', mydata.data.accessKey)
                        myHistory.push('/userhome');

                    } else {
                        // console.log(mydata.data.error);
                        if (mydata.data.error) {
                            alert(mydata.data.error);
                        } else {
                            alert("Invalied Username Or Password !!")
                        }

                    }
                })
                .catch(error => {
                    console.log("axios error", error);

                });
        }
    };

    return (
        <div className='login-page'>
            <div className='login-box'>
                <h1 className='login-title'>Login</h1>
                <p className='title-text'>Please enter your Username and Password</p>

                <form id='login-form'>
                    <input
                        type='email'
                        id='user-name'
                        placeholder='UserName'
                        className='login-field-style'
                        onChange={(event) => { setUserName(event.target.value); }}
                    />
                    <input
                        type='password'
                        id='login-pwd'
                        placeholder='Password'
                        className='login-field-style'
                        onChange={(event) => { setUserPwd(event.target.value); }}
                    />

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