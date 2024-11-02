"use client";
import React, { useEffect, useState } from 'react';
import getUser, { clearUser } from '../db/UserDB';
import ActiveNavLink from '../ActiveLink/ActiveNavLink';
import ActiveLink from '../ActiveLink/ActiveLink';

const LogInfo = ({ sm = false }) => {
    const [user, setUser] = useState(null);

    const logOut = () => {
        clearUser();
        setUser(null);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const temUser = await getUser();
            setUser(temUser);
        };
        fetchUser();
    }, []);
    if (sm && user) {
        return (
            <>
                <ActiveLink to="/dashboard">{user.name}</ActiveLink>
                <button
                    className="bg-red-500 text-black px-3 py-2 rounded font-semibold shadow-inner"
                    onClick={logOut}
                >
                    Log Out
                </button>
            </>
        );
    }

    if (sm && !user) {
        return (
            <>
                <ActiveLink to="/login">Login</ActiveLink>
                <ActiveLink to="/register">Register</ActiveLink>
            </>
        );
    }

    if (user) {
        return (
            <div className="flex items-center gap-2">
                <ActiveNavLink to="/dashboard">{user.name}</ActiveNavLink>
                <span className="text-red-600">|</span>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={logOut}
                >
                    Log Out
                </button>
            </div>
        );
    }

    return (
        <>
            <ActiveNavLink to="/login">Login</ActiveNavLink>
            <span className="text-red-600">|</span>
            <ActiveNavLink to="/register">Register</ActiveNavLink>
        </>
    );
};

export default LogInfo;
