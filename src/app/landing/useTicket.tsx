import { veeniuApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useTicket = () => {
  return useQuery({
    queryKey: ["ticket"],
    queryFn: async () => {
      const res = await veeniuApi.get("/tickets");
      console.log(res.data.data);
      
      return res.data;
    },
  });
};
