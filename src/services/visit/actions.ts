import { createAsyncThunk } from "@reduxjs/toolkit";
import {POST, VISIT} from "../../constants/api";
import formData from "../../http_client/multipartData";

export const createVisitActions = createAsyncThunk(
    'post/createVisitActions',
    async (payload: {}) => {
        const res = await formData.post(VISIT.CREATE, payload)
        return res.data
    }
)

export const deleteVisitActions = createAsyncThunk(
    'post/deleteVisitActions',
    async (payload: {}) => {
        const res = await formData.post(VISIT.DELETE, payload)
        console.log("payload", res)
        return res.data
    }
)
// export const selfPostActions = createAsyncThunk(
//     'post/selfActions',
//     async (payload: {}) => {
//         const res = await formData.post(VISIT.SELF, payload)
//         console.log("payload", res)
//         return res.data
//     }
// )
// export const getPostInPlaceActions = createAsyncThunk(
//     'post/getPostInPlaceActions',
//     async (payload: {}) => {
//         const res = await formData.post(POST.GET_All_IN_PLACE, payload)
//         console.log("payload", res)
//         return res.data
//     }
// )