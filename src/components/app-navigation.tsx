import { Box, Typography } from "@mui/material";

export const AppNavigation = () => {
  return (
    <Box
      sx={{
        width: 1,
        minWidth: 250,
        flex: 1,
        p: 3,
        borderRight: 1,
        borderColor: "divider",
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
      }}
    >
      <Typography variant="body1">Navigation</Typography>
    </Box>
  );
};
