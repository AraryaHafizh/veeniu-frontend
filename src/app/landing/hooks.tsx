import { veeniuApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useRandomEvent = () =>
  useQuery({
    queryKey: ["random-event"],
    queryFn: async () => {
      const { data } = await veeniuApi.get("/events/random");
      return data;
    },
  });

export const useLatestEvent = () =>
  useQuery({
    queryKey: ["latest-event"],
    queryFn: async () => {
      const { data } = await veeniuApi.get("/events/latest");
      return data;
    },    
  });