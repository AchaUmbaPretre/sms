import { api } from "../../../shared/api/apiClient";
import { ENDPOINTS } from '@/shared/api/endpoints'

export const getEleves = async (params) => {
  const { data } = await api.get(ENDPOINTS.ELEVES, { params });
  return data;
}

export const createEleves = async (payload) => {
  const { data } = await api.post(ENDPOINTS.ELEVES, payload);
  return data;
}

