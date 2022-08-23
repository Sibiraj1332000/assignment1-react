import React from 'react';
import './imagebanner.css';
import Slider from '../slider/slider';
import Filterbook from '../filterarea/filterbook';
import EventBox from '../eventbox/eventbox';
const Imagebanner = () => {
    return (
        <div className='banner-div'>
            <div className='slider-filter'>
                <Filterbook ></Filterbook>
                <div className='banner-second-row'>
                    <Slider></Slider>
                    <EventBox></EventBox>
                </div>

            </div>
        </div>
    );
};
export default Imagebanner;
