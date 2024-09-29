import { create } from "zustand";
import { CalendarEvent } from "~/lib/_types";
import { persist, createJSONStorage } from "zustand/middleware";

type EventsStore = {
  events: Array<CalendarEvent>;
  filteredEvents: Array<CalendarEvent>;
  setEvent: (event: CalendarEvent) => void;
  editEvent: (event: CalendarEvent) => void;
  deleteEvent: (eventId: string) => void;
};

export const useCalendarEventsStore = create<EventsStore>()(
  persist(
    (set, get) => ({
      events: [],
      filteredEvents: [],
      setEvent: (event) => set({ events: [...get().events, event] }),
      editEvent: (event) => {
        const leftEvents = get().events.filter((item) => item.id !== event.id);

        set({ events: [...leftEvents, event] });
      },
      deleteEvent: (eventId) => {
        const events = get().events.filter((event) => event.id !== eventId);
        set({ events });
      },
    }),
    {
      name: "calendar-events",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
