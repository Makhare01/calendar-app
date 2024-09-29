import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";
import { CALENDAR_SIZES } from "~/lib/utils";
import { useUsersStore } from "~/app/store";
import { UserItem } from "./user-item";

export const CalendarUsersList = () => {
  const users = useUsersStore((state) => state.users);
  const selectedUsers = useUsersStore((state) => state.selectedUsers);
  const selectUser = useUsersStore((state) => state.selectUser);
  const selectAll = useUsersStore((state) => state.selectAll);

  return (
    <Box
      sx={{
        borderRadius: 4,
        minWidth: 250,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          minHeight: CALENDAR_SIZES.height,
          display: "flex",
          alignItems: "center",
          ml: 2,
        }}
      >
        <Typography variant="body1">თანამშრომლები</Typography>
        <Typography
          variant="body1"
          fontWeight={500}
          ml={1}
          sx={{
            border: 1,
            borderColor: "divider",
            borderRadius: "40%",
            p: 0.5,
            px: 1,
          }}
        >
          {users.length}
        </Typography>
      </Box>

      <Box
        sx={{
          border: 1,
          borderColor: "text.disabled",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: 32,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            bgcolor: "secondary.main",
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          <Checkbox
            checked={users.length === selectedUsers.length}
            onChange={() => {
              selectAll();
            }}
          />
        </Box>

        <Stack
          divider={<Divider sx={{ borderColor: "text.disabled" }} />}
          sx={{
            overflow: "auto",
          }}
        >
          {users.map((user) => {
            const isSelected = selectedUsers.includes(user.id);

            return (
              <Box
                key={user.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  p: 2,
                }}
              >
                <Checkbox
                  checked={isSelected}
                  onChange={() => {
                    selectUser(user.id);
                  }}
                />

                <UserItem user={user} />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};
