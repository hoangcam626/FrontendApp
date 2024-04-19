import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER } from "../../constants/api";
import formData from "../../http_client/multipartData";

export const updateActions = createAsyncThunk(
    'user/updateActions',
    async (payload: {}) => {
        const res = await formData.put(USER.UPDATE, payload)
        console.log("payload", res)
        return res.data
    }
)
export const selfActions = createAsyncThunk(
    'user/selfActions',
    async (payload: {}) => {
        const res = await formData.post(USER.SELF, payload)
        console.log("payload", res)
        return res.data
    }
)

export const updateAvatarActions = createAsyncThunk(
    'user/updateAvatarActions',
    async (payload: {}) => {
        const res = await formData.put(USER.UPDATE_AVATAR, payload)
        console.log("payload", res)
        return res.data
    }
)