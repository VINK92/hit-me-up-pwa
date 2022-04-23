import { axiosInstance } from 'api';
import { API_ENDPOINTS } from 'api/constants';
import { ByIdParams } from 'api/types';

export const words = {
  getWordById({ wordId }: ByIdParams) {
    // TODO decscribe type of returned response data
    return axiosInstance.get(`${API_ENDPOINTS.WORD_BY_ID}/${wordId}`);
  },
  getAllWords() {
    // TODO decscribe type of returned response data
    return axiosInstance.get(`${API_ENDPOINTS.WORDS}`);
  },
};
