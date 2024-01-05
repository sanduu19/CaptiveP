import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
    AdminState,
    selectAdmin,
    updateAdmin,
} from "../features/admin/adminSlice";
import {adminRegistrationAPI} from "../features/admin/adminAPIs";
import {useNavigate} from "react-router-dom";
import {isLoggedIn} from "./MainLayout";

export function loader() {
    isLoggedIn();
}

const Registration = () => {
    const admin = useAppSelector<AdminState>(selectAdmin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateAdmin({ field: name, value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(adminRegistrationAPI(admin));
        navigate('/admin');
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    value={admin.userName}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={admin.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={admin.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
