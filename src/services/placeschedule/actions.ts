import { createAsyncThunk } from "@reduxjs/toolkit";
import {PLACE, PLACE_SCHEDULE} from "../../constants/api";
import formData from "../../http_client/multipartData";
import httpClient from "../../http_client";

export const createPlaceScheduleActions = createAsyncThunk(
    'date/createPlaceScheduleActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.CREATE, payload)
        console.log("payload", res)
        return res.data
    }
)

export const updatePlaceScheduleActions = createAsyncThunk(
    'date/updatePlaceScheduleActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.CREATE, payload)
        return res.data
    }
)
export const deletePlaceActions = createAsyncThunk(
    'date/deletePlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfPlaceActions = createAsyncThunk(
    'date/selfPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getScheduleOnDateActions = createAsyncThunk(
    'date/getScheduleOnDateActions',
    async (payload: {}) => {
        const res = await formData.post(PLACE_SCHEDULE.GET_ON_DATE, payload)
        console.log("payload", res)
        return res.data
    }
)

