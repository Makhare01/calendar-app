import { addMinutes, format, getHours, getMinutes, startOfDay } from "date-fns";

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

const startTime = startOfDay(new Date());

export const timeIntervals = Array.from({ length: 24 * 4 }).reduce(
  (acc: Record<string, string>, _, index) => {
    const time = addMinutes(startTime, index * 15);
    const hour = getHours(time);
    const minutes = getMinutes(time);

    acc[hour * 60 + minutes] = format(time, "HH:mm");
    return acc;
  },
  {}
);

export const weeksInGeorgian: Record<string, string> = {
  Mon: "ორშ",
  Tue: "სამ",
  Wed: "ოთხ",
  Thu: "ხუთ",
  Fri: "პარ",
  Sat: "შაბ",
  Sun: "კვი",
};
