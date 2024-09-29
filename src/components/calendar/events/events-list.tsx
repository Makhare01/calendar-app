import {
  useCalendarEventsStore,
  useCalendarPeriodStore,
  useUsersStore,
} from "~/app/store";
import { CalendarEventItem } from "./calendar-event-item";
import { useCalendarPeriod } from "~/lib/hooks";
import { isWithinInterval } from "date-fns";

export const EventsList = () => {
  const period = useCalendarPeriodStore((state) => state.period);
  const events = useCalendarEventsStore((state) => state.events);
  const selectedUsers = useUsersStore((state) => state.selectedUsers);

  const {
    periods: { startDate, endDate },
  } = useCalendarPeriod({ period });

  return (
    <>
      {events
        .filter((event) =>
          isWithinInterval(event.from, {
            start: startDate,
            end: endDate,
          })
        )
        .filter((event) =>
          selectedUsers.length > 0
            ? selectedUsers.some((user) => event.guests?.includes(user))
            : true
        )
        .map((event) => (
          <CalendarEventItem key={event.id} event={event} period={period} />
        ))}
    </>
  );
};
