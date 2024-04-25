import {createSlice} from "@reduxjs/toolkit"
import {
    createPlaceScheduleActions,
    updatePlaceScheduleActions,
    deletePlaceActions,
    selfPlaceActions,
    getScheduleOnDateActions

} from "./actions"

interface IPlaceSchedule {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: IPlaceSchedule = {
    res: [],
    loading: false,
    message: '',
}

export const placeScheduleSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPlaceScheduleActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(createPlaceScheduleActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(createPlaceScheduleActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updatePlaceScheduleActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updatePlaceScheduleActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updatePlaceScheduleActions.rejected, (state) => {
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
        builder.addCase(getScheduleOnDateActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getScheduleOnDateActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getScheduleOnDateActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })

        // builder.addCase(createPlaceActions.pending, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(createPlaceActions.fulfilled, (state) => {
        //     return {
        //         ...state,
        //         loading: false,
        //     };
        // })
        // builder.addCase(createPlaceActions.rejected, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(updatePlaceActions.pending, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(updatePlaceActions.fulfilled, (state) => {
        //     return {
        //         ...state,
        //         loading: false,
        //     };
        // })
        // builder.addCase(updatePlaceActions.rejected, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(deletePlaceActions.pending, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(deletePlaceActions.fulfilled, (state) => {
        //     return {
        //         ...state,
        //         loading: false,
        //     };
        // })
        // builder.addCase(deletePlaceActions.rejected, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(selfPlaceActions.pending, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(selfPlaceActions.fulfilled, (state) => {
        //     return {
        //         ...state,
        //         loading: false,
        //     };
        // })
        // builder.addCase(selfPlaceActions.rejected, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(getMyScheduleActions.pending, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })
        // builder.addCase(getMyScheduleActions.fulfilled, (state) => {
        //     return {
        //         ...state,
        //         loading: false,
        //     };
        // })
        // builder.addCase(getMyScheduleActions.rejected, (state) => {
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // })

    }
})