import { Box, Stack } from "@mui/material";
import { CalendarTable } from "./calendar-table";
import { CalendarPeriod } from "./calendar-period";
import { CalendarUsersList } from "./calendar-users-list";

export const Calendar = () => {
  return (
    <Stack spacing={1} height={1}>
      <CalendarPeriod />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "stretch",
          gap: 3,
          overflow: "auto",
        }}
      >
        <CalendarUsersList />
        <CalendarTable />
      </Box>
    </Stack>
  );
};
