import { api } from "@/shared/api/apiClient";
import { ENDPOINTS } from "@/shared/api/endpoints";

export const getMatieres = async (params) => {
  const { data } = await api.get(ENDPOINTS.MATIERES, { params });
  return data;
};

export const createMatiere = async (payload) => {
  const { data } = await api.post(ENDPOINTS.MATIERES, payload);
  return data;
};