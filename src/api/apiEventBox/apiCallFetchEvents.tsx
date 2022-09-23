import axios from "axios";


export const fetchEventsAndNews = () => {
    axios.get('http://localhost:3001/news_and_events').then(
        res=>{
           const data = res.data;
           console.log("jjjj",data);
           return data;
        }
    )
     
    
    
}
