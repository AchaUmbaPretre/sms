import { QueryClient } from "@tanstack/react-query";
import { message } from "antd";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      onError: (error) => {
        message.error(error?.response?.data?.message || "Erreur serveur");
      },
    },
    mutations: {
      retry: 0,
      onError: (error) => {
        message.error(error?.response?.data?.message || "Erreur mutation");
      },
    },
  },
});