import axios, { type AxiosInstance } from 'axios';

const restAPI: AxiosInstance = axios.create({
    baseURL: 'http://localhost',
});

restAPI.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.message !== 'Network Error') return Promise.resolve(error.response.data);
        let response: IError = {
            statusCode: 500,
            error: error.message,
            data: [],
        };
        const apiModalError = document.getElementById('api-modal-error');
        if (apiModalError) apiModalError.style.display = 'block';
        return Promise.reject(response);
    },
);

export default restAPI;
