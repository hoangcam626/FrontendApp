import {createSlice} from "@reduxjs/toolkit"
import {
    createReviewActions,
    updateReviewActions,
    deleteReviewActions,
    selfReviewActions,
    likeReviewActions,
    unlikeReviewActions,
    getReviewFavouritesActions,
    getReviewsActions,
    getReviewsCreateByActions,
    getReviewsForPlaceActions
} from "./actions"

interface IReview {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: IReview = {
    res: [],
    loading: false,
    message: '',
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createReviewActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(createReviewActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(createReviewActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateReviewActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateReviewActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updateReviewActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteReviewActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteReviewActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(deleteReviewActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfReviewActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfReviewActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(selfReviewActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(likeReviewActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(likeReviewActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(likeReviewActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikeReviewActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikeReviewActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(unlikeReviewActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewFavouritesActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewFavouritesActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getReviewFavouritesActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewsActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewsActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getReviewsActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewsCreateByActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewsCreateByActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getReviewsCreateByActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewsForPlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getReviewsForPlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getReviewsForPlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
    }
})