import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveRegisterDataNode } from '../../api/apiSignUp/apiCallsSignUp';

import './signup.css';

function Signup() {

    const myHistory = useHistory();

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<any>();
    const [houseName, setHouseName] = useState<string>();
    const [city, setCity] = useState<string>();
    const [district, setDistrict] = useState<string>();
    const [post, setPost] = useState<string>();
    const [pin, setPin] = useState<any>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value);
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value);
    const handleHouseName = (event: React.ChangeEvent<HTMLInputElement>) => setHouseName(event.target.value);
    const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value);
    const handleDistrict = (event: React.ChangeEvent<HTMLInputElement>) => setDistrict(event.target.value);
    const handlePost = (event: React.ChangeEvent<HTMLInputElement>) => setPost(event.target.value);
    const handlePin = (event: React.ChangeEvent<HTMLInputElement>) => setPin(event.target.value);
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value);
    // const userDetailDoc = {
    //     firstName,
    //     lastName,
    //     email,
    //     phone,
    //     houseName,
    //     city,
    //     district,
    //     post,
    //     pin
    // };
    // const userLoginDoc = {
    //     userName: email,
    //     password
    // };

    const userDetailMainDoc={
        firstName,
        lastName,
        email,
        phone,
        houseName,
        city,
        district,
        post,
        pin,
        password
    }

    const handleUpdateData = async () => {

        // saveRegisterData(userDetailDoc, userLoginDoc);
        saveRegisterDataNode(userDetailMainDoc);
        myHistory.push('/');

    };

    const handleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let validCount = 0;
        if (!firstName || firstName.trim() === '') alert('*Firstname Required');
        else {
            validCount++;
            if (!lastName || lastName.trim() === '') alert('*Lasrname Required');
            else {
                validCount++;
                if (!email || !email.trim().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)) {
                    alert('*Email Required');
                } else {
                    validCount++;
                    if (!phone || isNaN(phone.trim())) {
                        alert('Phone Number Should be Numbers');
                    } else {
                        if (phone.trim().toString().length < 10) {
                            alert('Phone number should have minimum 10 digits');
                        } else {
                            validCount++;
                            if (!houseName || houseName.trim() === '') alert('*Housename Required');
                            else {
                                validCount++;
                                if (!city || city.trim() === '') alert('*City Required');
                                else {
                                    validCount++;
                                    if (!district || district.trim() === '') alert('*District Required');
                                    else {
                                        validCount++;
                                        if (!post || post.trim() === '') alert('*Post Required');
                                        else {
                                            validCount++;
                                            if (!pin || isNaN(pin.trim())) {
                                                alert('Pin number should have minimum 10 digits');
                                            } else if (pin.toString().trim().length < 6) {
                                                alert('pin number should have minimum 6 digits');
                                            } else {
                                                validCount++;
                                                if (!password || !confirmPassword) {
                                                    alert(' Password Cant be empty');
                                                } else {
                                                    if (password === confirmPassword) {
                                                        validCount++;
                                                    }
                                                }
                                            }

                                        }
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }

        // let validCount = 10;
        if (validCount === 10) handleUpdateData();

    };

    return (
        <div className='signup-page'>
            <div className='signup-box'>
                <h1 className='signup-title'>SignUp</h1>
                <form action=''>
                    <input
                        type='text'
                        placeholder='First Name'
                        className=' small-field-style'
                        onChange={handleFirstName}
                    />
                    <input
                        type='text'
                        placeholder='Last Name'
                        className='right-field small-field-style'
                        onChange={handleLastName}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        className='field-style'
                        onChange={handleEmail}
                    />
                    <input
                        type='text'
                        placeholder='Phone'
                        className='field-style'
                        onChange={handlePhone}
                    />

                    <input
                        type='text'
                        placeholder='House Name'
                        className='field-style'
                        onChange={handleHouseName}
                    />

                    <input
                        type='text'
                        placeholder='City'
                        className='small-field-style'
                        onChange={handleCity}
                    />
                    <input
                        type='text'
                        placeholder='district'
                        className='small-field-style right-field'
                        onChange={handleDistrict}
                    />

                    <input
                        type='text'
                        placeholder='Post'
                        className='small-field-style'
                        onChange={handlePost}
                    />
                    <input
                        type='text'
                        placeholder='pin'
                        className='small-field-style right-field'
                        onChange={handlePin}
                    />

                    <input
                        type='Password'
                        placeholder='Password'
                        className='small-field-style'
                        onChange={handlePassword}
                    />
                    <input
                        type='Password'
                        placeholder='Confirm Password'
                        className='small-field-style right-field'
                        onChange={handleConfirmPassword}
                    />

                    <br />
                    <button
                        className='main-signup-btn'
                        onClick={event => handleSignUp(event)}
                    >SignUp</button>
                </form>
            </div>
        </div>
    );

}


export default Signup;