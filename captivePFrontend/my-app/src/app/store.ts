import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import adminReducer from "../features/admin/adminSlice"
import fieldReducer from "../features/fields/fieldSlice"

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    field: fieldReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
