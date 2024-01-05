import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import {adminLoginAPI, adminLogoutAPI, adminRegistrationAPI} from "./adminAPIs";

export interface AdminState {
    id: string
    userName: string
    email: string
    password: string
    status: string
    isLoggedIn: boolean
}

const initialState: AdminState = {
    id: null,
    userName: "",
    email: "",
    password: "",
    status: "Pending",
    isLoggedIn: false
}

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        updateAdmin: (state:AdminState, action: PayloadAction<{ field: string, value: string }>) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        resetAdminState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminRegistrationAPI.pending, (state:AdminState) => {
                state.status = "Pending"
            })
            .addCase(adminRegistrationAPI.fulfilled, (state:AdminState, action) => {
                const { id, userName, email, status, isLoggedIn } = action.payload;
                if(status == "Success"){
                    state.id = id;
                    state.userName = userName;
                    state.email = email;
                    state.password = "";
                    state.status = status;
                    state.isLoggedIn = isLoggedIn;
                }else{
                    console.log("Error: ",state.status);
                }
            })
            .addCase(adminRegistrationAPI.rejected, (state:AdminState, action) => {
                state.status= "Failure"
                console.log(action.payload)
            })
            .addCase(adminLoginAPI.pending, (state:AdminState) => {
                state.status = "Pending"
            })
            .addCase(adminLoginAPI.fulfilled, (state:AdminState, action) => {
                const { id, userName, email, status, isLoggedIn } = action.payload;
                if(status == "Success"){
                    state.id = id;
                    state.userName = userName;
                    state.email = email;
                    state.password = "";
                    state.status = status;
                    state.isLoggedIn = isLoggedIn;
                }else{
                    console.log("Error: ",state.status);
                }
            })
            .addCase(adminLoginAPI.rejected, (state:AdminState, action) => {
                state.status= "Failure"
                console.log(action.payload)
            })
            .addCase(adminLogoutAPI.pending, (state:AdminState) => {
                state.status = "Pending"
            })
            .addCase(adminLogoutAPI.fulfilled, (state:AdminState, action) => {
                const { id, userName, email, status, isLoggedIn } = action.payload;
                if(status == "Pending"){
                    state.status = status;
                }else{
                    console.log("Error: ",state.status);
                }
            })
            .addCase(adminLogoutAPI.rejected, (state:AdminState, action) => {
                state.status= "Failure"
                console.log(action.payload)
            })
    },
})

export const { updateAdmin, resetAdminState } = adminSlice.actions
export const selectAdmin = (state: RootState) => state.admin
export default adminSlice.reducer
