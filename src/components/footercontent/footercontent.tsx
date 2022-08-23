import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './footercontent.js';
import './footercontent.css';
class Footercontents extends Component {
    render() {
        return (
            <div className='footer-details'>
                <div className='footer-elements-div-1'>
                    <ul className='footer-link'>
                        <li className='footer-link-title'>Discover</li>
                        <li>
                            <Link to='/userhome/books'>Books</Link>
                        </li>
                        <li>
                            <Link to='/userhome/aboutus'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/userhome/bookstaken'>Books Taken</Link>
                        </li>
                        <li>
                            <Link to='/userhome/gallery'>Gallery</Link>
                        </li>

                    </ul>
                </div>
                <div
                    className='footer-elements-div-2'>
                    <div className='footer-contact'>
                        <h2>Contact Us</h2>
                        <p>
              Administrative Assistant & State Public Information Officer Kerala
              State Central Libray Palayam, Vikas Bhavan PO Thiruvananthapuram.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footercontents;
