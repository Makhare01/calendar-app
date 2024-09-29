import { Box, Divider, Stack, Typography } from "@mui/material";
import { CalendarPeriod } from "~/lib/hooks";
import {
  CALENDAR_SIZES,
  calendarItemStyles,
  weeksInGeorgian,
} from "~/lib/utils";

const CalendarDateItem = ({ dayOfWeek, day }: CalendarPeriod) => {
  return (
    <Box
      sx={{
        ...calendarItemStyles,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <Typography variant="h3">{day}</Typography>
      <Typography variant="caption" color="text.secondary">
        {weeksInGeorgian[dayOfWeek]}
      </Typography>
    </Box>
  );
};

type Props = {
  dates: Array<CalendarPeriod>;
};

export const CalendarDatesHeader = ({ dates }: Props) => {
  return (
    <Stack
      direction="row"
      divider={
        <Divider
          orientation="vertical"
          sx={{
            height: CALENDAR_SIZES.height - 16,
            mt: 1,
            borderColor: "text.disabled",
          }}
        />
      }
      sx={{
        width: dates.length * CALENDAR_SIZES.width + dates.length - 16,
        border: 1,
        borderColor: "transparent",
      }}
    >
      {dates.map((calendarDateInfo) => (
        <CalendarDateItem key={calendarDateInfo.date} {...calendarDateInfo} />
      ))}
    </Stack>
  );
};
