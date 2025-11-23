import { veeniuApi } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface DeleteVoucherProps {
  id: string;
}

export const useDeleteVoucher = () => {
  const session = useSession();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: DeleteVoucherProps) => {
      const token = session.data!.user.accessToken;

      await veeniuApi.delete(`/vouchers/delete/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      toast.success("Delete voucher success");
      queryClient.invalidateQueries({ queryKey: ["org-vrs"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);

      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
};
