import React from 'react';
import './mainpage.css';
import Navbar from '../Navbar/navbar';
import Imagebanner from '../banner/imagebanner';


function MainPage() {
    return (
        <div className='banner-nav'>
            <Navbar ></Navbar>
            <Imagebanner></Imagebanner>
        </div>
    );
}

export default MainPage;