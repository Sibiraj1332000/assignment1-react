import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../redux/store';

type ChildTypes = {
    children: React.ReactNode | React.ReactElement | any
}

export const RequireAuth = ({ children }: ChildTypes) => {
    const myHistory = useHistory();
    const isUser = useSelector((state: RootState) => state.authenticateUser.loginUserName);

    if (isUser || window.sessionStorage.getItem('logedinUser')) {
        return (children)
    }
    else {

        myHistory.push('/');
        return ('');
    }
    
};