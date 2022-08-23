import { AboutUsChildSuccessType, AboutUsGeneralSuccessType } from "../../Interface/Interface"
import { FETCH_ABOUTUS_CHILDREN_SUCCESS, FETCH_ABOUTUS_FAILURE, FETCH_ABOUTUS_GENERAL_SUCCESS, FETCH_ABOUTUS_REQUEST } from "./aboutUsType"



export const fetchAboutUsRequest = () => {
    return {
        type: FETCH_ABOUTUS_REQUEST
    }
}

export const fetchAboutUsGeneralSuccess = (data: AboutUsGeneralSuccessType) => {

    return {
        type: FETCH_ABOUTUS_GENERAL_SUCCESS,
        payload: data
    }
}

export const fetchAboutUsChildrenSuccess = (data: AboutUsChildSuccessType) => {

    return {
        type: FETCH_ABOUTUS_CHILDREN_SUCCESS,
        payload: data
    }
}

export const fetchAboutUsFailure = (error: string) => {
    return {
        type: FETCH_ABOUTUS_FAILURE,
        payload: error
    }
}