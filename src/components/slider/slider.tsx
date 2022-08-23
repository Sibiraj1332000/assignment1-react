import React from 'react';
import { useState } from 'react';
import './slider.css';


function Slider() {
    let imgArray = [
        'http://127.0.0.1:8080/img1.jpg',
        'http://127.0.0.1:8080/img2.jpg',
        'http://127.0.0.1:8080/img3.jpg',
        'http://127.0.0.1:8080/img4.jpg'
    ];
    let [imgPos, setImgPos] = useState(0);

    let slideRight = () => {
        setImgPos(imgPos + 1);
        if (imgPos > 2) setImgPos(0);
    };
    let slideleft = () => {
        setImgPos(imgPos - 1);
        if (imgPos < 1) setImgPos(3);
    };

    return (
        <div
            className='slider-div'
            style={{
                backgroundImage: 'url(' + imgArray[imgPos] + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className='slider-nav'>
                <button onClick={slideleft}>
                    <span className='material-symbols-outlined icone-style'>
            navigate_before
                    </span>
                </button>
                <button onClick={slideRight}>
                    <span className='material-symbols-outlined icone-style'>
            navigate_next
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Slider;
