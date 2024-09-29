import { Box, Typography } from "@mui/material";
import userImage from "~/app/assets/images/user.png";
import { CalendarUser } from "~/lib/_types";

type Props = { user: CalendarUser };

export const UserItem = ({ user }: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        component="img"
        src={userImage}
        alt="Avatar"
        sx={{ width: 34, height: 34, borderRadius: "50%" }}
      />

      <Box
        sx={{
          height: 1,
        }}
      >
        <Typography variant="body1">{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </Box>
    </Box>
  );
};
