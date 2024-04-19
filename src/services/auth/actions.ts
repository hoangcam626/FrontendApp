import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH } from "../../constants/api";
import formData from "../../http_client/multipartData";

export const registerActions = createAsyncThunk(
    'auth/registerActions',
    async (payload: {}) => {
        const res = await formData.post(AUTH.REGISTER, payload)
        return res.data
    }
)

export const loginActions = createAsyncThunk(
    'auth/loginActions',
    async (payload: {}) => {
        const res = await formData.post(AUTH.LOGIN, payload)
        console.log("payload", res)
        return res.data
    }
)