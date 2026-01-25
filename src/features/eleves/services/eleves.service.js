import { api } from "../../../shared/api/apiClient";

export function getEleves(params) {
  return api.get('/eleves', { params })
}

