import { createAsyncThunk } from "@reduxjs/toolkit";
import { PLACE } from "../../constants/api";
import formData from "../../http_client/multipartData";
import httpClient from "../../http_client";

export const createPlaceActions = createAsyncThunk(
    'place/createPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE.CREATE, payload)
        return res.data
    }
)

export const updatePlaceActions = createAsyncThunk(
    'place/updatePlaceActions',
    async (payload: {}) => {
        const res = await formData.put(PLACE.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deletePlaceActions = createAsyncThunk(
    'place/deletePlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfPlaceActions = createAsyncThunk(
    'place/selfPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)
export const likePlaceActions = createAsyncThunk(
    'place/likePlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE.LIKE, payload)
        console.log("payload", res)
        return res.data
    }
)

export const unlikePlaceActions = createAsyncThunk(
    'place/unlikePlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE.UNLIKE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getPlaceFavouritesActions = createAsyncThunk(
    'place/getPlaceFavouritesActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE.FAVOURITES, payload)
        console.log("payload", res)
        return res.data
    }
)

export const getPlacesActions = createAsyncThunk(
    'place/getPlacesActions',
    async () => {
        const res = await httpClient.get(PLACE.PLACES)
        console.log("payload", res)
        return res.data
    }
)

export const getRatingActions = createAsyncThunk(
    'place/getRatingActions',
    async (payload:{}) => {
        const res = await formData.post(PLACE.RATING,payload)
        console.log("payload", res)
        return res.data
    }
)
export const getPlacesCodeActions = createAsyncThunk(
    'place/getPlacesCodeActions',
    async (payload:{}) => {
        const res = await formData.post(PLACE.PLACES_CODE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const searchPlaceActions = createAsyncThunk(
    'place/searchPlaceActions',
    async (payload:{}) => {
        const res = await formData.post(PLACE.SEARCH, payload)
        console.log("payload", res)
        return res.data
    }
)

export const getImagePlace = createAsyncThunk(
    'place/getImagePlace',
    async (payload:{}) => {
        const res = await formData.post(PLACE.IMAGES, payload)
        console.log("payload", res)
        return res.data
    }
)