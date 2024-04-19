import axios from "axios";
import { BASE_URL } from "../constants/api";
import { getItemObjectAsyncStorage } from "../../utils/asyncStorage";
import { KEY_STORAGE } from "../constants/storage";

const formData = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*/*',
    }
})

const getToken = async () => {
    const token = await getItemObjectAsyncStorage(KEY_STORAGE.SAVED_INFO);
    return token ? `Bearer ${token.accessToken}` : '';
}
formData.interceptors.request.use(async function (config) {

    config.headers.Authorization = await getToken();
    return config;
});

formData.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default formData