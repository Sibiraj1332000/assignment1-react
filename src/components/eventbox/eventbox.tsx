import React, { useEffect, useState } from 'react';
import { EventDataType } from '../../Interface/Interface';
import './eventbox.css';



function EventBox() {
    const [eventData, setEventData] = useState<EventDataType[]>();
    useEffect(() => {
        // eslint-disable-next-line no-undef
        fetch(`${process.env.REACT_APP_JSON_PATH}/newsAndEvent`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setEventData(data);
                
            });
        
    }, []);

    return (
        <div className='event-area'>

            <div className='event-header'><h3>News & Events</h3></div>

            {eventData && eventData.map((item:EventDataType, index:number) => {
                return (
                    <div className='one-event' key={index}>
                        <h3>{item.eventTitle}</h3>
                        <p>{item.eventDetails}</p>
                    </div>
                );
            })}

        </div>
    );
}

export default EventBox;