import { veeniuApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useEvents = () => {
  const session = useSession();
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const uid = session.data!.user.id;
      const res = await veeniuApi.get(`/events/organizer/${uid}`);
      console.log(res.data.data);

      return res.data;
    },
  });
};
