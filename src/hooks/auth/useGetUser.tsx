import { veeniuApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useGetUser = () => {
  const session = useSession();

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const uid = session.data!.user.id;

      const res = await veeniuApi.get(`/auth/${uid}`);
      return res.data;
    },
    staleTime: 1000 * 60 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
