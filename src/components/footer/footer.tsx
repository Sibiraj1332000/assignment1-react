import React from 'react';
import Footercontents from '../footercontent/footercontent';
import './footer.css';
import Enquiry from '../enquiry/enquiry';

function Footer() {
    return (
        <footer className='footer-part'>
            <div className='container footer-elements' >
                <Enquiry></Enquiry>
                <Footercontents></Footercontents>
            </div>
        </footer>
    );
}

export default Footer;
