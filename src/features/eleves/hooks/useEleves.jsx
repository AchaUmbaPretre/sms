import { useQuery } from "@tanstack/react-query";
import { getEleves } from "../services/eleves.service";

export const useEleves = (params) => {
    return useQuery({
        queryKey: ["eleves", params],
        queryFn: () => getEleves(params),
        keepPreviousData: true,
        staleTime: 5 * 60 * 1000,
    })
}