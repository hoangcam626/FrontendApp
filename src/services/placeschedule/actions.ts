import { createAsyncThunk } from "@reduxjs/toolkit";
import {PLACESCHEDULE} from "../../constants/api";
import formData from "../../http_client/multipartData";
import httpClient from "../../http_client";

export const createPlaceActions = createAsyncThunk(
    'placeOnSchedule/createPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACESCHEDULE.CREATE, payload)
        return res.data
    }
)

export const updatePlaceActions = createAsyncThunk(
    'placeOnSchedule/updatePlaceActions',
    async (payload: {}) => {
        const res = await formData.put(PLACESCHEDULE.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deletePlaceActions = createAsyncThunk(
    'placeOnSchedule/deletePlaceActions',
    async (payload: {}) => {
        const res = await formData.delete(PLACESCHEDULE.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfPlaceActions = createAsyncThunk(
    'placeOnSchedule/selfPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACESCHEDULE.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)
