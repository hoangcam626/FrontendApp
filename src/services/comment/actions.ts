import { createAsyncThunk } from "@reduxjs/toolkit";
import { COMMENT } from "../../constants/api";
import formData from "../../http_client/multipartData";

export const createActions = createAsyncThunk(
    'comment/createActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.CREATE, payload)
        return res.data
    }
)

export const updateActions = createAsyncThunk(
    'comment/updateActions',
    async (payload: {}) => {
        const res = await formData.put(COMMENT.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deleteActions = createAsyncThunk(
    'comment/deleteActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfActions = createAsyncThunk(
    'comment/selfActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)
export const likeCommentActions = createAsyncThunk(
    'comment/likeCommentActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.LIKE, payload)
        console.log("payload", res)
        return res.data
    }
)

export const unlikeCommentActions = createAsyncThunk(
    'comment/unlikeCommentActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.UNLIKE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getFavouritesActions = createAsyncThunk(
    'comment/getFavouritesActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.FAVOURITES, payload)
        console.log("payload", res)
        return res.data
    }
)

export const getCommentsActions = createAsyncThunk(
    'comment/getCommentsActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.GET_SUB_COMMENTS, payload)
        console.log("payload", res)
        return res.data
    }
)

export const getSubCommentsActions = createAsyncThunk(
    'comment/getSubCommentsActions',
    async (payload: {}) => {
        const res = await formData.post(COMMENT.GET_All_IN_POST, payload)
        console.log("payload", res)
        return res.data
    }
)