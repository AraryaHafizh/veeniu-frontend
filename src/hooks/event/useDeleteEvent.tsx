import { veeniuApi } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface DeleteEventProps {
  id: string;
}

export const useDeleteEvent = () => {
  const session = useSession();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: DeleteEventProps) => {
      const token = session.data!.user.accessToken;

      await veeniuApi.delete(`/events/delete/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      toast.success("Delete event success");
      queryClient.invalidateQueries({ queryKey: ["org-events"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);

      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
};
