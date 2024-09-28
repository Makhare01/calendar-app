import { Box } from "@mui/material";
import { CALENDAR_SIZES } from "~/lib/utils";

export const CalendarHoursColumn = () => {
  return (
    <Box
      sx={{
        width: 100,
        height: CALENDAR_SIZES.height * 24,
        border: 1,
        borderColor: "red",
      }}
    >
      Hours
    </Box>
  );
};
