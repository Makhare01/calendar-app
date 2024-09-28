import { Box, Typography } from "@mui/material";

export const CalendarUsersList = () => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 4,
        p: 2,
        width: 250,
      }}
    >
      <Typography>Users</Typography>
    </Box>
  );
};
