import {createSlice} from "@reduxjs/toolkit"
import {
    createVisitActions,
    deleteVisitActions,

} from "./actions"

interface IVisit {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: IVisit = {
    res: [],
    loading: false,
    message: '',
}

export const visitSlice = createSlice({
    name: 'visit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createVisitActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(createVisitActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(createVisitActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })

        builder.addCase(deleteVisitActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteVisitActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(deleteVisitActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })

    }
})