import { veeniuApi } from "@/lib/axios";
import { TicketProps } from "@/props/event.props";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export const useEditTicket = () => {
  const session = useSession();
  const queryClient = useQueryClient();
  const token = session.data!.user.accessToken;

  const mutation = useMutation({
    mutationFn: async (data: TicketProps) => {
      const { id, ...rest } = data;
      console.log("Ticket data to send:", data);
      await veeniuApi.patch(`/tickets/edit/${id}`, rest, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },

    onSuccess: () => {
      toast.success("Edit ticket success");
      queryClient.invalidateQueries({ queryKey: ["org-tickets"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error.response?.data.message);

      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
  return {
    mutateAsync: mutation.mutate,
    isPending: mutation.isPending,
  };
};
