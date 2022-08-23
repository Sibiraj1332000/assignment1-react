import { LogInDetailsType, SignUpDetailsType } from "../../Interface/Interface";

export const saveRegisterData = async (userDetailDoc:SignUpDetailsType, userLoginDoc:LogInDetailsType) => {
    await fetch(process.env.REACT_APP_JSON_PATH + '/userDetails', {
        method: 'POST',
        body: JSON.stringify(userDetailDoc),
        headers: { 'Content-Type': 'application/json' }
    });

    await fetch(process.env.REACT_APP_JSON_PATH + '/login', {
        method: 'POST',
        body: JSON.stringify(userLoginDoc),
        headers: { 'Content-Type': 'application/json' }
    });
};