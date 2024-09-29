import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { Periods } from "../_types";

export type CalendarPeriod = {
  date: string;
  dayOfWeek: string;
  day: number;
};

type DatePeriods = {
  startDate: Date;
  endDate: Date;
};

type Args = {
  period: Periods;
};

export const useCalendarPeriod = ({
  period,
}: Args): { dates: Array<CalendarPeriod>; periods: DatePeriods } => {
  const currentDate = new Date();

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  const startDate = period === "WEEK" ? weekStart : monthStart;
  const endDate = period === "WEEK" ? weekEnd : monthEnd;

  const daysArray = eachDayOfInterval({ start: startDate, end: endDate });

  const daysWithWeekInfo = daysArray.map((day) => ({
    date: format(day, "yyyy-MM-dd"),
    dayOfWeek: format(day, "EE"),
    day: Number(format(day, "dd")),
  }));

  return {
    dates: daysWithWeekInfo,
    periods: {
      startDate: period === "WEEK" ? weekStart : monthStart,
      endDate: period === "WEEK" ? weekEnd : monthEnd,
    },
  };
};
