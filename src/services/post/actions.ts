import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "../../constants/api";
import formData from "../../http_client/multipartData";

export const createPostActions = createAsyncThunk(
    'post/createPostActions',
    async (payload: {}) => {
        const res = await formData.post(POST.CREATE, payload)
        return res.data
    }
)

export const updatePostActions = createAsyncThunk(
    'post/updatePostActions',
    async (payload: {}) => {
        const res = await formData.put(POST.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deletePostActions = createAsyncThunk(
    'post/deletePostActions',
    async (payload: {}) => {
        const res = await formData.post(POST.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfPostActions = createAsyncThunk(
    'post/selfPostActions',
    async (payload: {}) => {
        const res = await formData.post(POST.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)
export const likePostActions = createAsyncThunk(
    'post/likePostActions',
    async (payload: {}) => {
        const res = await formData.post(POST.LIKE, payload)
        console.log("payload", res)
        return res.data
    }
)

export const unlikePostActions = createAsyncThunk(
    'post/unlikePostActions',
    async (payload: {}) => {
        const res = await formData.post(POST.UNLIKE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getPostFavouritesActions = createAsyncThunk(
    'post/getPostFavouritesActions',
    async (payload: {}) => {
        const res = await formData.post(POST.FAVOURITES, payload)
        console.log("payload", res)
        return res.data
    }
)

export const getPostsActions = createAsyncThunk(
    'post/getPostActions',
    async () => {
        const res = await formData.post(POST.GET_ALL)
        console.log("payload", res)
        return res.data
    }
)

export const getPostCreateByActions = createAsyncThunk(
    'post/getPostCreateByActions',
    async (payload: {}) => {
        const res = await formData.post(POST.GET_ALL_CREATE_BY, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getPostInPlaceActions = createAsyncThunk(
    'post/getPostInPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(POST.GET_All_IN_PLACE, payload)
        console.log("payload", res)
        return res.data
    }
)