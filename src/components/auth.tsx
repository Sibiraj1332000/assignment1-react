import { createContext, useContext, useState } from 'react';
import React from 'react';
import { ChildType } from '../Interface/Interface';


type ContextType = {
    user?: string | null,
    login?: (user: string) => void | null,
    logout?: () => void | null;
}

const AuthContext = createContext<ContextType>({});

export const AuthProvider = ({ children }: ChildType) => {
    const [user, setuser] = useState<null | string>(null);

    const login = (user: string) => {
        setuser(user);
    };

    const logout = () => {
        setuser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    );

};

export const useAuth = () => {
    return useContext(AuthContext);
};