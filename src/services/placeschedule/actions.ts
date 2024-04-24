import { createAsyncThunk } from "@reduxjs/toolkit";
import {PLACE_SCHEDULE} from "../../constants/api";
import formData from "../../http_client/multipartData";
import httpClient from "../../http_client";

export const createPlaceActions = createAsyncThunk(
    'placeOnSchedule/createPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.CREATE, payload)
        return res.data
    }
)

export const updatePlaceActions = createAsyncThunk(
    'placeOnSchedule/updatePlaceActions',
    async (payload: {}) => {
        const res = await formData.put(PLACE_SCHEDULE.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deletePlaceActions = createAsyncThunk(
    'placeOnSchedule/deletePlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfPlaceActions = createAsyncThunk(
    'placeOnSchedule/selfPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)

