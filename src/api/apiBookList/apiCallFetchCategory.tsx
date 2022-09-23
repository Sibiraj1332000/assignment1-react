import axios from "axios"
import { fetchBookCategories } from "../../redux/bookList/bookListActions"
import { AppDispatch } from "../../redux/store"

export const fetchCategoryList = (): any => {
    return (dispatch: AppDispatch) => {
        // fetch("http://localhost:8000/bookCategoryList")
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log("f cat   ",data);

        //     dispatch(fetchBookCategories(data))
        // })


        axios.get('http://localhost:3001/book_list/book_category')
            .then(result=>{
                console.log("RES CATEGORY ",result.data);
                dispatch(fetchBookCategories(result.data))
            });




    }
}