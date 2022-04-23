import { axiosInstance } from 'api';
import { API_ENDPOINTS } from 'api/constants';
import { ByIdParams } from 'api/types';

interface AuthParams {
  email: string;
  password: string;
}

export const auth = {
  signup({ email, password }: AuthParams) {
    return axiosInstance.post(`${API_ENDPOINTS.SIGNUP}`, { email, password });
  },
  login({ email, password }: AuthParams) {
    return axiosInstance.post(`${API_ENDPOINTS.LOGIN}`, { email, password });
  },
  logout({ userId }: ByIdParams) {
    return axiosInstance.post(`${API_ENDPOINTS.LOGOUT}/${userId}`);
  },
};
