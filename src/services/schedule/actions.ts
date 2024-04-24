import { createAsyncThunk } from "@reduxjs/toolkit";
import { SCHEDULE } from "../../constants/api";
import formData from "../../http_client/multipartData";
import http_client from "../../http_client";
import httpClient from "../../http_client";

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
        const res = await formData.post(SCHEDULE.DELETE, payload)
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
    async () => {
        const res = await httpClient.get(SCHEDULE.GET_All_MY_SCHEDULE)
        return res.data
    }
)
