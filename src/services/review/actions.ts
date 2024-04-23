import { createAsyncThunk } from "@reduxjs/toolkit";
import { REVIEW } from "../../constants/api";
import formData from "../../http_client/multipartData";
import http_client from "../../http_client";
import httpClient from "../../http_client";

export const createReviewActions = createAsyncThunk(
    'review/createReviewActions',
    async (payload: {}) => {
        const res = await formData.post(REVIEW.CREATE, payload)
        return res.data
    }
)

export const updateReviewActions = createAsyncThunk(
    'review/updateReviewActions',
    async (payload: {}) => {
        const res = await formData.put(REVIEW.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deleteReviewActions = createAsyncThunk(
    'review/deleteReviewActions',
    async (payload: {}) => {
        const res = await formData.delete(REVIEW.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfReviewActions = createAsyncThunk(
    'review/selfReviewActions',
    async (payload: {}) => {
        const res = await formData.post(REVIEW.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)
export const likeReviewActions = createAsyncThunk(
    'review/likeReviewActions',
    async (payload: {}) => {
        const res = await formData.post(REVIEW.LIKE, payload)
        console.log("payload", res)
        return res.data
    }
)

export const unlikeReviewActions = createAsyncThunk(
    'review/unlikeReviewActions',
    async (payload: {}) => {
        const res = await formData.delete(REVIEW.UNLIKE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getReviewFavouritesActions = createAsyncThunk(
    'review/getReviewFavouritesActions',
    async (payload: {}) => {
        const res = await formData.post(REVIEW.FAVOURITES, payload)
        console.log("payload", res)
        return res.data
    }
)

export const getReviewsActions = createAsyncThunk(
    'review/getReviewsActions',
    async () => {
        const res = await httpClient.get(REVIEW.GET_ALL)
        console.log("payload", res)
        return res.data
    }
)

export const getReviewsCreateByActions = createAsyncThunk(
    'review/getReviewsCreateByActions',
    async (payload: {}) => {
        const res = await formData.post(REVIEW.GET_ALL_CREATE_BY, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getReviewsForPlaceActions = createAsyncThunk(
    'review/getReviewsForPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(REVIEW.GET_All_FOR_PLACE, payload)
        console.log("payload", res)
        return res.data
    }
)