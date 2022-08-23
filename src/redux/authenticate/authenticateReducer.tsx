import { AuthenticateInitStateType } from '../../Interface/Interface';
import { USER_LOGIN, USER_LOGOUT } from './authenticateType';


const initialState = {
    loginUserName: null,
    loginUserID: null
};

const authenticateReducer = (state: AuthenticateInitStateType = initialState, action: { type: string; payload:any; }) => {
    switch (action.type) {
        case USER_LOGIN:
            console.log("dddd",action.payload);
            
            return {
                ...state,
                loginUserName: action.payload.userName,
                loginUserID:action.payload.userID
            };
        case USER_LOGOUT:
            return {
                ...state,
                loginUserName: action.payload,
                loginUserID:action.payload
            };
        default: return state;
    }
};

export default authenticateReducer;