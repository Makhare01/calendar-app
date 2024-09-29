import { Box, Button, Typography } from "@mui/material";
import { useCalendarEventsStore } from "~/app/store";

type Props = {
  eventId: string;
  onDelete: () => void;
};

export const DeleteEventConfirmation = ({ eventId, onDelete }: Props) => {
  const deleteEvent = useCalendarEventsStore((state) => state.deleteEvent);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: 3,
      }}
    >
      <Typography variant="h3" textAlign="center">
        ნამდვილად გსურთ ღონისძიების წაშლა?
      </Typography>

      <Button
        variant="outlined"
        color="error"
        fullWidth
        sx={{ mb: 1, mt: 3 }}
        onClick={() => {
          onDelete();
          deleteEvent(eventId);
        }}
      >
        წაშლა
      </Button>
    </Box>
  );
};
