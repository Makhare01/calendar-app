import { format, setHours, setMinutes } from "date-fns";

export const CALENDAR_SIZES = {
  width: 160,
  height: 60,
};

export const calendarItemStyles = {
  width: CALENDAR_SIZES.width,
  maxWidth: CALENDAR_SIZES.width,
  minHeight: CALENDAR_SIZES.height,
  maxHeight: CALENDAR_SIZES.height,
};

export const allDayHours = Array.from({ length: 24 }, (_, index) => {
  const date = setMinutes(setHours(new Date(), index), 0);
  return format(date, "HH:mm");
});
