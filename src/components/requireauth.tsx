import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../redux/store';

type ChildTypes = {
    children: React.ReactNode | React.ReactElement | any
}

export const RequireAuth = ({ children }: ChildTypes) => {
    const myHistory = useHistory();
    const isUser = useSelector((state: RootState) => state.authenticateUser.loginUserName);
    const [dontLogout, setdontLogout] = useState<any>(false);
    // let dontLogout = false

    axios.interceptors.response.use(
        response => {
          return response
        },
        error => {
          if (error.response.status === (403 || 401)) {
            console.log("LogOut");
            window.sessionStorage.clear();
            window.localStorage.clear();
            setdontLogout (true)
          }
        }
      );
    

    if (isUser || window.sessionStorage.getItem('logedinUser')||dontLogout) {
        return (children)
    }
    else {
        myHistory.push('/');
        return ('');
    }
    
};