import {createSlice} from "@reduxjs/toolkit"
import {
    updateActions,
    updateAvatarActions,
    selfActions,

} from "./actions"

interface IUser {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: IUser = {
    res: [],
    loading: false,
    message: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updateActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateAvatarActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateAvatarActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updateAvatarActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
    }
})