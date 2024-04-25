import { createSlice } from "@reduxjs/toolkit"
import { createCommentActions, updateCommentActions, deleteCommentActions, selfCommentActions, likeCommentActions, unlikeCommentActions, getCommentsActions,getSubCommentsActions, getFavouritesActions} from "./actions"

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
        builder.addCase(createCommentActions.pending, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(createCommentActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
              };
        })
        builder.addCase(createCommentActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
              };
        })
        builder.addCase(updateCommentActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updateCommentActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updateCommentActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteCommentActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deleteCommentActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(deleteCommentActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfCommentActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfCommentActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(selfCommentActions.rejected, (state) => {
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