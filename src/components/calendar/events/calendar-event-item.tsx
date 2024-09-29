import { Box, IconButton, Popover, Typography } from "@mui/material";
import { format, getDay } from "date-fns";
import { useState } from "react";
import { IconArrowBack, IconClose } from "~/app/assets/icons";
import { CalendarEvent, Periods } from "~/lib/_types";
import { CALENDAR_SIZES } from "~/lib/utils";
import { EventDetails } from "./event-details";
import { useBoolean } from "~/lib/hooks";
import { EventForm } from "../event-form";
import { DeleteEventConfirmation } from "./delete-event-confirmation";

type Props = {
  event: CalendarEvent;
  period: Periods;
};

export const CalendarEventItem = ({ event, period }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const isEditing = useBoolean();
  const isDeleting = useBoolean();

  const open = Boolean(anchorEl);

  const onClose = () => {
    setAnchorEl(null);
    isEditing.setFalse();
    isDeleting.setFalse();
  };

  const eventWeekStartDay = getDay(event.from);

  const startDay = Number(format(event.from, "dd"));
  const endDay = event.to ? Number(format(event.to, "dd")) : startDay;
  const durationDays = endDay - startDay + 1;

  const left = period === "WEEK" ? eventWeekStartDay : startDay;
  const height = event.endMinute - event.startMinute;

  const isDetailsPage = isEditing.isFalse && isDeleting.isFalse;

  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.main",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: 3,
          position: "absolute",
          left: (left - 1) * CALENDAR_SIZES.width + left / 2,
          top: event.startMinute + 32 + event.startMinute / 45,
          width: CALENDAR_SIZES.width * durationDays - 30,
          minHeight: height,
          maxHeight: height,
          px: 1,
          py: 0.25,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <Typography variant="caption" color="white" fontWeight={500}>
          {event.title}
        </Typography>

        <Typography variant="body2" color="white">
          {event.description}
        </Typography>
      </Box>

      <Popover
        id={open ? "calendar-item-details-popover" : undefined}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: 400,
            maxWidth: 400,
          }}
        >
          <Box
            sx={{
              bgcolor: "#F1F3F4",
              px: 2,
              py: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: isDetailsPage ? "flex-end" : "space-between",
              borderBottom: 1,
              borderColor: "text.disabled",
            }}
          >
            {!isDetailsPage && (
              <IconButton
                onClick={() => {
                  isEditing.setFalse();
                  isDeleting.setFalse();
                }}
              >
                <IconArrowBack sx={{ color: "text.primary", fontSize: 20 }} />
              </IconButton>
            )}
            <IconButton onClick={onClose}>
              <IconClose sx={{ color: "text.primary", fontSize: 16 }} />
            </IconButton>
          </Box>

          {isEditing.isTrue && (
            <EventForm
              onSave={onClose}
              defaultValues={{
                ...event,
                from: new Date(event.from),
                ...(event.to && { to: new Date(event.to) }),
              }}
              fromDate={new Date(event.from)}
              startTime={event.startMinute}
            />
          )}

          {isDeleting.isTrue && (
            <DeleteEventConfirmation eventId={event.id} onDelete={onClose} />
          )}

          {isDetailsPage && (
            <EventDetails
              event={event}
              onEdit={isEditing.setTrue}
              onDelete={isDeleting.setTrue}
            />
          )}
        </Box>
      </Popover>
    </>
  );
};
