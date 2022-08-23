import { USER_LOGIN, USER_LOGOUT } from './authenticateType';


export const userLogin = (userDet:{userName:string,userID:number}) => {
    console.log(userDet);
    
    return {
        type: USER_LOGIN,
        payload: userDet
    };
};
export const userLogout = () => {
    return {
        type: USER_LOGOUT,
        payload: null
    };
};