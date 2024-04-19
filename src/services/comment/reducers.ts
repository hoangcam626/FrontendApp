import { createSlice } from "@reduxjs/toolkit"
import { createActions, updateActions, deleteActions, selfActions, likeCommentActions, unlikeCommentActions, getCommentsActions,getSubCommentsActions, getFavouritesActions} from "./actions"

interface IComment {
    loading: boolean,
    res: [],
    message: string,
}

const initialState:IComment = {
    res: [],
    loading: false,
    message: '',
}

export const commentSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createActions.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(createActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(createActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
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
        builder.addCase(deleteActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(deleteActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(selfActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(likeCommentActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(likeCommentActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(likeCommentActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikeCommentActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikeCommentActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(unlikeCommentActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getFavouritesActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getFavouritesActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getFavouritesActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getCommentsActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getCommentsActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getCommentsActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getSubCommentsActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getSubCommentsActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getSubCommentsActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })

    }
})