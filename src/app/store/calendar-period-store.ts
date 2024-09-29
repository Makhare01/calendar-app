import { create } from "zustand";
import { Periods } from "~/lib/_types";
import { persist, createJSONStorage } from "zustand/middleware";

type EventsStore = {
  period: Periods;
  setCalendarPeriod: (period: Periods) => void;
};

export const useCalendarPeriodStore = create<EventsStore>()(
  persist(
    (set) => ({
      period: "WEEK",
      setCalendarPeriod: (period) => set({ period }),
    }),
    {
      name: "calendar-period",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
