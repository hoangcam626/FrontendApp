import {createSlice} from "@reduxjs/toolkit"
import {
    createPostActions,
    updatePostActions,
    deletePostActions,
    selfPostActions,
    likePostActions,
    unlikePostActions,
    getPostsActions,
    getPostCreateByActions,
    getPostInPlaceActions,
    getPostFavouritesActions
} from "./actions"

interface IPost {
    loading: boolean,
    res: [],
    message: string,
}

const initialState: IPost = {
    res: [],
    loading: false,
    message: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPostActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(createPostActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(createPostActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updatePostActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(updatePostActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(updatePostActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deletePostActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(deletePostActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(deletePostActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfPostActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(selfPostActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(selfPostActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(likePostActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(likePostActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(likePostActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikePostActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(unlikePostActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(unlikePostActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostFavouritesActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostFavouritesActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getPostFavouritesActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostsActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostsActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getPostsActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostCreateByActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostCreateByActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getPostCreateByActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostInPlaceActions.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
        builder.addCase(getPostInPlaceActions.fulfilled, (state) => {
            return {
                ...state,
                loading: false,
            };
        })
        builder.addCase(getPostInPlaceActions.rejected, (state) => {
            return {
                ...state,
                loading: true,
            };
        })
    }
})