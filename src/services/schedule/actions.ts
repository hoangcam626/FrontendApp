import { createAsyncThunk } from "@reduxjs/toolkit";
import { SCHEDULE } from "../../constants/api";
import formData from "../../http_client/multipartData";

export const createScheduleActions = createAsyncThunk(
    'schedule/createScheduleActions',
    async (payload: {}) => {
        const res = await formData.post(SCHEDULE.CREATE, payload)
        return res.data
    }
)

export const updateScheduleActions = createAsyncThunk(
    'schedule/updateScheduleActions',
    async (payload: {}) => {
        const res = await formData.put(SCHEDULE.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deleteScheduleActions = createAsyncThunk(
    'schedule/deleteScheduleActions',
    async (payload: {}) => {
        const res = await formData.delete(SCHEDULE.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfScheduleActions = createAsyncThunk(
    'schedule/selfScheduleActions',
    async (payload: {}) => {
        const res = await formData.post(SCHEDULE.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)
export const getMyScheduleActions = createAsyncThunk(
    'schedule/getMyScheduleActions',
    async (payload: {}) => {
        const res = await formData.post(SCHEDULE.GET_All_MY_SCHEDULE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const createPlaceActions = createAsyncThunk(
    'schedule/createPlaceActions',
    async (payload: {}) => {
        const res = await formData.post(SCHEDULE.CREATE_PLACE, payload)
        return res.data
    }
)

export const updatePlaceActions = createAsyncThunk(
    'schedule/updatePlaceActions',
    async (payload: {}) => {
        const res = await formData.put(SCHEDULE.UPDATE_PLACE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const deletePlaceActions = createAsyncThunk(
    'schedule/deletePlaceActions',
    async (payload: {}) => {
        const res = await formData.delete(SCHEDULE.DELETE_PLACE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfPlaceActions = createAsyncThunk(
    'schedule/selfPlaceActions',
    async (payload: {}) => {
        const res = await formData.put(SCHEDULE.SELF_PLACE, payload)
        console.log("payload", res)
        return res.data
    }
)
