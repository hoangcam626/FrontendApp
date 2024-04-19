import {createSlice} from "@reduxjs/toolkit"
import {
    createScheduleActions,
    updateScheduleActions,
    deleteScheduleActions,
    selfScheduleActions,
    getMyScheduleActions,
    createPlaceActions,
    updatePlaceActions,
    deletePlaceActions,
    selfPlaceActions,

} from "./actions"

interface ISchedule {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: ISchedule = {
    res: [],
    loading: false,
    message: '',
}

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createScheduleActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(createScheduleActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(createScheduleActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateScheduleActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateScheduleActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updateScheduleActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteScheduleActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteScheduleActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(deleteScheduleActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfScheduleActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfScheduleActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(selfScheduleActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })

        builder.addCase(createPlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(createPlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(createPlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updatePlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updatePlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updatePlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deletePlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deletePlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(deletePlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfPlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfPlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(selfPlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getMyScheduleActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getMyScheduleActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getMyScheduleActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })

    }
})