import {createAsyncThunk} from "@reduxjs/toolkit";
import {AdminState} from "./adminSlice";
import axios from "axios";

export interface AdminResponse {
    message: string
}

export const adminRegistrationAPI = createAsyncThunk<AdminResponse>(
    "admin/adminRegistration",
    async (info: AdminState) => {
        try {
            const response = await axios.post("http://localhost:8080/admin/registration", info);
            return response.data
        } catch (error) {
            return error
        }
    },
)

export const adminLoginAPI = createAsyncThunk<AdminResponse>(
    "admin/adminLogin",
    async (info: AdminState) => {
        try {
            const response = await axios.post("http://localhost:8080/admin/login", info);
            return response.data
        } catch (error) {
            return error
        }
    },
)

export const adminLogoutAPI = createAsyncThunk<AdminResponse>(
    "admin/adminLogout",
    async (info: AdminState) => {
        try {
            const response = await axios.post("http://localhost:8080/admin/logout", info);
            return response.data
        } catch (error) {
            return error
        }
    },
)

export const getAdminDetailsAPI = createAsyncThunk<AdminResponse>(
    "admin/adminDetails",
    async (info: string) => {
        try {
            const response = await axios.post("http://localhost:8080/admin/get", info);
            return response.data
        } catch (error) {
            return error
        }
    },
)