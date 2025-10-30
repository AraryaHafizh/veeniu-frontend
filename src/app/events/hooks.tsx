import { useQuery } from "@tanstack/react-query";
import { veeniuApi } from "@/lib/axios";
import { useEventStore } from "./store";
import { eventCardProps } from "@/components/ui/event-card";

interface EventsResponse {
  data: eventCardProps[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
  };
}

export const useEvents = () => {
  const { page, limit, search, category, location, setData, setPending } =
    useEventStore();

  const { data, isPending } = useQuery<EventsResponse>({
    queryKey: ["events", page, limit, search, category, location],
    queryFn: async () => {
      const { data } = await veeniuApi.get("/events", {
        params: { page, limit, search, category, location },
      });
      return data;
    },
  });

  setPending(isPending);
  setData(data!.data, data!.meta);

  return { data: data?.data, isPending };
};

export const useEvent = (id: string) =>
  useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data } = await veeniuApi.get(`/events/${id}`);
      return data;
    },
  });
