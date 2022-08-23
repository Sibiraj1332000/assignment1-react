import { fetchBookCategories } from "../../redux/bookList/bookListActions"
import { AppDispatch } from "../../redux/store"

export const fetchCategoryList = ():any => {
    return (dispatch:AppDispatch)=>{
        fetch("http://localhost:8000/bookCategoryList")
        .then(res=>res.json())
        .then(data=>{
            dispatch(fetchBookCategories(data))
        })
    }
}