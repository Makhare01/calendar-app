import { Box } from "@mui/material";
import { CalendarDatesHeader } from "./calendar-dates-header";
import { useCalendarPeriod } from "~/lib/hooks";
import { CALENDAR_SIZES } from "~/lib/utils";
import { CalendarItem } from "./calendar-item";
import { getHours, isToday } from "date-fns";

export const CalendarTable = () => {
  const { dates } = useCalendarPeriod({ period: "MONTH" });
  const today = new Date();

  const currentHour = getHours(today);

  return (
    <Box
      sx={{
        flex: 1,
        overflowX: "auto",
      }}
    >
      <CalendarDatesHeader dates={dates} />

      <Box
        sx={{
          width: dates.length * CALENDAR_SIZES.width + dates.length,
          height: "calc(100% - 64px)",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            height: 32,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            border: 1,
            borderBottom: 0,
            borderColor: "text.disabled",
            bgcolor: "secondary.main",
          }}
        />
        <Box
          sx={{
            border: 1,
            borderColor: "text.disabled",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            position: "relative",
          }}
        >
          {Array.from({ length: 24 }).map((_, index) => {
            const hour = index + 1;
            return (
              <Box
                key={`hour-${hour}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {dates.map((date) => {
                  return (
                    <CalendarItem
                      key={date.date}
                      daysCount={dates.length}
                      day={date.day}
                      hour={hour}
                      isToday={
                        isToday(new Date(date.date)) && hour == currentHour
                      }
                    />
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
