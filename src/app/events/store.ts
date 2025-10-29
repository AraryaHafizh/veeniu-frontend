import { eventCardProps } from "@/components/ui/event-card";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EventStoreState {
  data: eventCardProps[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
  };
  isPending: boolean;
  page: number;
  limit: number;
  search: string;
  category?: string;
  location?: string;
  setQuery: (
    query: Partial<
      Omit<EventStoreState, "setQuery" | "data" | "meta" | "isPending">
    >,
  ) => void;
  setData: (data: eventCardProps[], meta: EventStoreState["meta"]) => void;
  setPending: (pending: boolean) => void;
}

export const useEventStore = create<EventStoreState>()(
  devtools((set) => ({
    data: [],
    meta: { total: 0, page: 1, limit: 10, totalPages: 0, hasNext: false },
    isPending: false,
    page: 1,
    limit: 10,
    search: "",
    category: undefined,
    location: undefined,
    setQuery: (query) => set((state) => ({ ...state, ...query })),
    setData: (data, meta) => set({ data, meta }),
    setPending: (isPending) => set({ isPending }),
  })),
);
