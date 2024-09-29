import { Box } from "@mui/material";
import { CalendarTable } from "./calendar-table";
import { CalendarUsersList } from "./users";

export const Calendar = () => {
  return (
    <Box
      sx={{
        height: 1,
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
  );
};
