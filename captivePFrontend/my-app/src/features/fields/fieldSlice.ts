import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import {getAllFieldsAPI, saveFieldsAPI, saveFieldValuesAPI} from "./fieldAPIs";

export type Field = {
    name: string
    data: string[]
};

export type FieldState = Field[];

const initialState: FieldState = [];

export const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField: (state:FieldState, action: PayloadAction<Field>) => {
            state.push(action.payload);
        },
        removeField: (state:FieldState, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
        addInputForField: (state:FieldState, action: PayloadAction<Record<string, string>>) => {
            const updates = action.payload;
            Object.entries(updates).forEach(([fieldName, value]) => {
                state.find((f: Field) => f.name === fieldName).data.push(value);
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveFieldsAPI.pending, (state:FieldState) => {
            })
            .addCase(saveFieldsAPI.fulfilled, (state:FieldState, action) => {
                console.log(action.payload)
            })
            .addCase(saveFieldsAPI.rejected, (state:FieldState, action) => {
                console.log(action.payload)
            })
            .addCase(saveFieldValuesAPI.pending, (state:FieldState) => {
            })
            .addCase(saveFieldValuesAPI.fulfilled, (state:FieldState, action) => {
                console.log(action.payload)
            })
            .addCase(saveFieldValuesAPI.rejected, (state:FieldState, action) => {
                console.log(action.payload)
            })
            .addCase(getAllFieldsAPI.pending, (state:FieldState) => {
            })
            .addCase(getAllFieldsAPI.fulfilled, (state:FieldState, action) => {
                state = action.payload
            })
            .addCase(getAllFieldsAPI.rejected, (state:FieldState, action) => {
                console.log(action.payload)
            })
    },
})

export const { addField, addInputForField } = fieldSlice.actions
export const selectFields = (state: RootState) => state.field
export default fieldSlice.reducer
