import { TicketData } from "@/props/ticket.props";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EventStore {
  selectedEvent: TicketData | null;
  setSelectedEvent: (event: TicketData) => void;
  reset: () => void;
}

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      selectedEvent: null,
      setSelectedEvent: (event) => set({ selectedEvent: event }),
      reset: () => set({ selectedEvent: null }),
    }),

    { name: "event-storage" },
  ),
);
