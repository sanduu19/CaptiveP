import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {addField, addInputForField, FieldState, Field, selectFields} from "../features/fields/fieldSlice";
import {saveFieldsAPI, saveFieldValuesAPI} from "../features/fields/fieldAPIs";
import {adminLogoutAPI, getAdminDetailsAPI} from "../features/admin/adminAPIs";
import {AdminState, resetAdminState, selectAdmin} from "../features/admin/adminSlice";
import {useLoaderData, useNavigate} from "react-router-dom";
import {isLoggedIn} from "./MainLayout";
import axios from "axios";

export async function loader() {
    const adminName = localStorage.getItem("AdminName");
    const response = await axios.post("http://localhost:8080/admin/get", adminName);
    const { id, userName, email, status, isLoggedIn } =  response.data;
    if (isLoggedIn){
        return "LoggedIn"
    }
    return "Wrong Authentication"
}

const AdminPanel = () => {
    const loggedIn = useLoaderData();
    const fields = useAppSelector<FieldState>(selectFields);
    const admin = useAppSelector<AdminState>(selectAdmin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [nextField, setNextField] = useState<Field>({name:"",data:[]});
    const [nextFieldValues, setNextFieldValues] = useState<Record<string, string>>({});

    useEffect(() => {
        if (loggedIn === "LoggedIn") {
            console.log(loggedIn);
            dispatch(getAdminDetailsAPI(localStorage.getItem("AdminName")))
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            dispatch(resetAdminState());
            localStorage.setItem("IsLoggedIn", "LoggedOut");
            localStorage.setItem("AdminName", "");
            navigate("/");
        }
    }, [isLoggedIn]);
    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files)
        }
    };

    const handleFieldChange = (key: string, value: string) => {
        setNextField(prevField => ({
            ...prevField,
            [key]: value
        }));
    };

    const handleValueChange = (fieldName: string, value: string) => {
        setNextFieldValues(prevValues => ({
            ...prevValues,
            [fieldName]: value
        }));
    };

    const handleFieldSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addField(nextField));
        dispatch(saveFieldsAPI(nextField));
        setNextField({name:"", data:[]});
    };

    const handleValueSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addInputForField(nextFieldValues));
        //dispatch(saveFieldValuesAPI());
        setNextFieldValues({});
    };

    return (
        <div>
            <form onSubmit={handleLogoChange}>
                <div>
                    <label>
                        Upload Logo:
                        <input type="file" onChange={handleLogoChange} />
                    </label>
                </div>
                <button type="submit">Upload Logo</button>
            </form>

            <form onSubmit={handleFieldSubmit}>
                <div>
                    <input
                        type="text"
                        value={nextField.name}
                        placeholder="Field Name"
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                    />
                </div>
                <button type="submit">Add Field</button>
            </form>

            <div>
                <form onSubmit={(e) => handleValueSubmit(e)}>
                    {fields.map((field: Field, index: number) => (
                        <div key={index}>
                            <p>Field Name: {field.name}</p>
                                <div>
                                    <input
                                        type="text"
                                        value={nextFieldValues[field.name] || ""}
                                        placeholder={field.name}
                                        onChange={(e) => handleValueChange(field.name, e.target.value)}
                                    />
                                </div>
                        </div>
                    ))}
                    {fields.length != 0 ? <button type="submit">Add Data</button> : <></>}
                </form>
            </div>
            <div className="container">
                {fields.map((field: Field, index: number) => (
                    <div key={index}>
                        <p>Field Name: {field.name}</p>
                        {field.data.map((a:string, index:number) =>(<p key={index}>{a}</p>))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;
