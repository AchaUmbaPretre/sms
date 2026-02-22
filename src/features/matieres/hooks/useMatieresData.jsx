import { useQuery } from "@tanstack/react-query";
import { getMatieres } from "../services/matieres.service";

export const useMatieresData = (params) => {
  return useQuery({
    queryKey: ["matieres", params],
    queryFn: () => getMatieres(params),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });
}; 