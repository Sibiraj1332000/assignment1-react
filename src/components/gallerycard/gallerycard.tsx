import React from 'react';
import { GalleryCardPropsType } from '../../Interface/Interface';
import './gallerycard.css';


function Gallerycard(props:GalleryCardPropsType) {
    let path = props.imgUrl;
    return (
        <div className='image-box'>
            <img src={path} alt='' />
        </div>
    );
}

export default Gallerycard;