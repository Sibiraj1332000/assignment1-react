import React, { useRef, useState } from 'react';
import './enquiry.css';
function Enquiry() {

    const [enquiryEmail, setEnquiryEmail] = useState<string>();
    const [enquiryMessage, setEnquiryMessage] = useState<string>();
    const ref1 = useRef<any>();
    const ref2 = useRef<any>();


    const handleSend = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const enquiryDoc = {
            enquiryEmail,
            enquiryMessage
        };

        await fetch('http://localhost:8000/enquiryData', {
            method: 'POST',
            body: JSON.stringify(enquiryDoc),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => { });
        ref1.current.value = ""
        ref2.current.value = ""
    };

    return (
        <div className='enquiry-box'>
            <h3>Enquiry</h3>
            <form className='enquiry-form'>

                <input
                    type='email'
                    name='email'
                    id='email-field'
                    placeholder='   Email'
                    onChange={(event) => setEnquiryEmail(event.target.value)}
                    ref={ref1}
                />

                <br />

                <textarea
                    name='enquiry-message'
                    id='message-field'
                    cols={30}
                    rows={10}
                    placeholder='  Message'
                    onChange={(event) => setEnquiryMessage(event.target.value)}
                    ref={ref2}
                ></textarea>

                <button
                    id='sent-enquiry'
                    onClick={handleSend}
                >Send</button>
                
            </form>
        </div>
    );
}

export default Enquiry;
