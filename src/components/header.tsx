import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        flex: "0 1",
        p: 3,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="body1">Header</Typography>
    </Box>
  );
};
