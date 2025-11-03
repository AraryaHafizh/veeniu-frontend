import { veeniuApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useLanding = () => {
  return useQuery({
    queryKey: ["landing"],
    queryFn: async () => {
      const res = await veeniuApi.get("/events");
      console.log(res.data.data);
      
      return res.data;
    },
  });
};
