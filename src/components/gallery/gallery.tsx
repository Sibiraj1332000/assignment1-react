import './gallery.css';
import Gallerycard from '../gallerycard/gallerycard';
import { useEffect, useState } from 'react';
import { BookDetailsType } from '../../Interface/Interface';




function Gallery() {

    const [galleryDetails, setGalleryDetails] = useState<BookDetailsType[]>()

    useEffect(() => {
        
        fetch(process.env.REACT_APP_JSON_PATH + "/galleryImageDetails")
            .then(res => res.json())
            .then(data => {
                setGalleryDetails(data)
            })
    }, [])


    return (
        <div className='img-gallery container'>
            <h2>Gallery</h2>
            <div className='gallery-grid'>
                {
                    galleryDetails&&galleryDetails.map((item: {imgUrl:string,key:number}) => {
                        return (
                            <Gallerycard
                                imgUrl={item.imgUrl}
                                key={item.key}></Gallerycard>
                        );
                    })
                }
            </div>
        </div>
    );
}


export default Gallery;