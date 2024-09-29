import { Box, Button, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { useUsersStore } from "~/app/store";
import { CalendarEvent } from "~/lib/_types";
import { timeIntervals } from "~/lib/utils";
import { UserItem } from "../users";

type Props = {
  event: CalendarEvent;
  onEdit: () => void;
  onDelete: () => void;
};

export const EventDetails = ({ event, onEdit, onDelete }: Props) => {
  const users = useUsersStore((state) => state.users);
  const eventUsers = users.filter((user) => event.guests?.includes(user.id));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: 3,
      }}
    >
      <Typography variant="h3" mb={1}>
        {event.title}
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={1}>
        {event.description}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1">
          {format(event.from, "EE dd MM y")}
        </Typography>

        {event.to && (
          <>
            <Typography variant="body1" sx={{ px: 2 }}>
              -
            </Typography>
            <Typography variant="body1">
              {format(event.to, "EE dd MM y")}
            </Typography>
          </>
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Typography variant="body1">
          {timeIntervals[event.startMinute]}
        </Typography>

        <Typography variant="body1" sx={{ px: 2 }}>
          -
        </Typography>
        <Typography variant="body1">
          {timeIntervals[event.endMinute]}
        </Typography>
      </Box>

      {eventUsers.length > 0 && (
        <>
          <Typography variant="body1" mt={2}>
            Guests
          </Typography>

          <Stack spacing={2} mt={1}>
            {eventUsers.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </Stack>
        </>
      )}

      <Button
        variant="outlined"
        fullWidth
        sx={{ mb: 1, mt: 3 }}
        onClick={onEdit}
      >
        რედაქტირება
      </Button>
      <Button variant="outlined" color="error" fullWidth onClick={onDelete}>
        წაშლა
      </Button>
    </Box>
  );
};
