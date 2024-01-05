import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Field} from "./fieldSlice";

export const saveFieldsAPI = createAsyncThunk(
    "field/saveField",
    async (info: Field) => {
        try {
            const response = await axios.post("http://localhost:8080/test/testingfields", info);
            return response.data
        } catch (error) {
            return error
        }
    },
)

export const saveFieldValuesAPI = createAsyncThunk(
    "field/saveFieldValue",
    async (info) => {
        try {
            const response = await axios.post("http://localhost:8080/test/testingfields", info);
            return response.data
        } catch (error) {
            return error
        }
    },
)

export const getAllFieldsAPI = createAsyncThunk(
    "field/getAllFields",
    async () => {
        try {
            const response = await axios.get("http://localhost:8080/test/testingfields");
            return response.data
        } catch (error) {
            return error
        }
    },
)