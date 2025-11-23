import { veeniuApi } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface DeleteTicketProps {
  id: string;
}

export const useDeleteTicket = () => {
  const session = useSession();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: DeleteTicketProps) => {
      const token = session.data!.user.accessToken;

      await veeniuApi.delete(`/Tickets/delete/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      toast.success("Delete ticket success");
      queryClient.invalidateQueries({ queryKey: ["org-tickets"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);

      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
};
