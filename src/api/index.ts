import axios, { AxiosError, AxiosResponse } from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const dataParser = <T>(result: AxiosResponse<T>): T => result.data;
const errorHandler = (error: AxiosError) => {
  // TODO set to store
  console.log(new Error(error.message, error.toJSON()));
};

axiosInstance.interceptors.request.use(async request => {
  const accessToken = ''; // TODO get from store
  if (request.headers) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
}, errorHandler);

axiosInstance.interceptors.response.use(dataParser, (error: AxiosError) => {
  if (error.response?.status === 401) {
    // TODO removeAccessToken from store
  }
  return errorHandler(error);
});

export { axiosInstance };
