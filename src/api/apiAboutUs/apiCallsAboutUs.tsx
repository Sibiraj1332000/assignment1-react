import {
    fetchAboutUsChildrenSuccess,
    fetchAboutUsFailure,
    fetchAboutUsGeneralSuccess,
    fetchAboutUsRequest
} from "../../redux/aboutUs/aboutUsActions";

import { AppDispatch } from "../../redux/store"

export const fetchAboutUsDetails = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchAboutUsRequest())
        const generalBookSummary: string = process.env.REACT_APP_JSON_PATH + '/generalBookSummary';
        await fetch(generalBookSummary)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchAboutUsGeneralSuccess(data))
            })
            .catch(err => dispatch(fetchAboutUsFailure(err)))

        const childBookSummary: string = process.env.REACT_APP_JSON_PATH + '/childBookSummary';
        await fetch(childBookSummary)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchAboutUsChildrenSuccess(data))
            })
            .catch(err => dispatch(fetchAboutUsFailure(err)))
    }
}