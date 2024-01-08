import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { FieldState, Field, selectFields } from "../features/fields/fieldSlice";
import '../css/splashpage.css'
import {isLoggedIn} from "./MainLayout";
import {useLoaderData} from "react-router-dom";
import {getAllFieldsAPI} from "../features/fields/fieldAPIs";

export function loader() {
    return isLoggedIn();
}

const Splash = () => {
    const isLoggedIn = useLoaderData();
    const fields = useAppSelector<FieldState>(selectFields);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(isLoggedIn);
        //dispatch(getAllFieldsAPI());
    }, [isLoggedIn]);

    return (
        <div className="container">
            <p>{localStorage.getItem("IsLoggedIn")}</p>
            {fields.map((field: Field, index: number) => (
                <div key={index}>
                    <p>Field Name: {field.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Splash;
