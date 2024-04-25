import {createSlice} from "@reduxjs/toolkit"
import {
    createPlaceActions,
    updatePlaceActions,
    deletePlaceActions,
    selfPlaceActions,
    likePlaceActions,
    unlikePlaceActions,
    getPlaceFavouritesActions,
    getPlacesActions,
    getRatingActions,
    getImagePlace,
    getPlacesCodeActions,
    searchPlaceActions
} from "./actions"

interface IPlace {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: IPlace = {
    res: [],
    loading: false,
    message: '',
}

export const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
        builder.addCase(likePlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(likePlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(likePlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikePlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikePlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(unlikePlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPlaceFavouritesActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPlaceFavouritesActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getPlaceFavouritesActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPlacesActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPlacesActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getPlacesActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getRatingActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getRatingActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getRatingActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPlacesCodeActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPlacesCodeActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getPlacesCodeActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getImagePlace.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getImagePlace.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getImagePlace.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(searchPlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(searchPlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(searchPlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
    }
})