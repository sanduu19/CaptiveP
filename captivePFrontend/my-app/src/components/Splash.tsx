import React from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { FieldState, Field, selectFields } from "../features/fields/fieldSlice";
import '../css/splashpage.css'
import {getAllFieldsAPI} from "../features/fields/fieldAPIs";
import {useNavigate} from "react-router-dom";
import {isLoggedIn} from "./MainLayout";

export function loader() {
    isLoggedIn();
    const dispatch = useAppDispatch();
    dispatch(getAllFieldsAPI());
}

const Splash = () => {
    const fields = useAppSelector<FieldState>(selectFields);
    const dispatch = useAppDispatch();

    return (
        <div className="container">
            {fields.map((field: Field, index: number) => (
                <div key={index}>
                    <p>Field Name: {field.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Splash;
