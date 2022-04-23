import { axiosInstance } from 'api';
import { API_ENDPOINTS } from 'api/constants';
import { ByIdParams } from 'api/types';

export const collocations = {
  getCollocationById({ collocationId }: ByIdParams) {
    // TODO decscribe type of returned response data
    return axiosInstance.get(`${API_ENDPOINTS.COLLOCATION_BY_ID}/${collocationId}`);
  },
  getCollocationWords() {
    // TODO decscribe type of returned response data
    return axiosInstance.get(`${API_ENDPOINTS.COLLOCATIONS}`);
  },
};
