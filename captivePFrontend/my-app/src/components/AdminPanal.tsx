import React, { useState } from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {addField, addInputForField, FieldState, Field, selectFields} from "../features/fields/fieldSlice";
import {saveFieldsAPI, saveFieldValuesAPI} from "../features/fields/fieldAPIs";
import {adminLogoutAPI} from "../features/admin/adminAPIs";
import {AdminState, resetAdminState, selectAdmin} from "../features/admin/adminSlice";
import {useNavigate} from "react-router-dom";

const AdminPanel = () => {
    const fields = useAppSelector<FieldState>(selectFields);
    const admin = useAppSelector<AdminState>(selectAdmin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [nextField, setNextField] = useState<Field>({name:"",data:[]});
    const [nextFieldValues, setNextFieldValues] = useState<Record<string, string>>({});

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
