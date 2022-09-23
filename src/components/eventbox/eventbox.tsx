// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { fetchEventsAndNews } from '../../api/apiEventBox/apiCallFetchEvents';
import { EventDataType } from '../../Interface/Interface';
import './eventbox.css';



function EventBox() {
    const [eventData, setEventData] = useState<EventDataType[]>();
    useEffect(() => {
        // // eslint-disable-next-line no-undef
        // fetch(`${process.env.REACT_APP_JSON_PATH}/newsAndEvent`)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         setEventData(data);

        //     });
        (async () => {
            axios.get('http://localhost:3001/news_and_events').then(
                res => {
                    const data = res.data;
                    console.log("jjjj", data);
                    setEventData(data)

                }
            )
        })();

        // if (data){

        // }



    }, []);

    return (
        <div className='event-area'>

            <div className='event-header'><h3>News & Events</h3></div>
            
            {eventData && eventData.map((item: any, index: number) => {
                console.log(item);
                
                return (
                    <div className='one-event' key={index}>
                        
                        <h3>{item.title}</h3>
                        <p>{item.details}</p>
                    </div>
                );
            })}

        </div>
    );
}

export default EventBox;