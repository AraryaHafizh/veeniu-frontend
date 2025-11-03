import { veeniuApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await veeniuApi.get("/events");
      console.log(res.data.data);
      
      return res.data;
    },
  });
};
