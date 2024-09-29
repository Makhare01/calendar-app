import { Box, Divider, IconButton, Popover } from "@mui/material";
import { getMinutes } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { CALENDAR_SIZES, calendarItemStyles } from "~/lib/utils";
import { EventForm } from "./event-form";
import { IconClose } from "~/app/assets/icons";

type Props = {
  date: Date;
  daysCount: number;
  day: number;
  hour: number;
  isToday: boolean;
};

export const CalendarItem = ({
  date,
  daysCount,
  day,
  hour,
  isToday,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const open = Boolean(anchorEl);
  const currentMinute = isToday ? getMinutes(new Date()) : null;

  const ref = useRef<HTMLHRElement | null>(null);

  const onClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (currentMinute) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentMinute]);

  return (
    <>
      <Box
        sx={{
          ...calendarItemStyles,
          borderBottom: hour === 24 ? 0 : 1,
          borderRight: day === daysCount ? 0 : 1,
          borderColor: "divider",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        {currentMinute && !open && (
          <Divider
            ref={ref}
            sx={{
              borderColor: "red",
              width: "90%",
              ml: 0.5,
              borderBottomWidth: 2,
              position: "absolute",
              top: currentMinute,
              zIndex: 10,
            }}
          />
        )}
        {open && (
          <Box
            sx={{
              width: CALENDAR_SIZES.width - 10,
              height: CALENDAR_SIZES.height - 10,
              bgcolor: "primary.main",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: 4,
            }}
          />
        )}
      </Box>
      <Popover
        id={open ? "calendar-item-popover" : undefined}
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
        elevation={0}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: "text.disabled",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          },
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
              justifyContent: "flex-end",
              borderBottom: 1,
              borderColor: "text.disabled",
            }}
          >
            <IconButton onClick={onClose}>
              <IconClose sx={{ color: "text.primary", fontSize: 16 }} />
            </IconButton>
          </Box>

          <EventForm
            fromDate={date}
            startTime={(hour - 1) * 60 + (currentMinute ? currentMinute : 0)}
            onSave={onClose}
          />
        </Box>
      </Popover>
    </>
  );
};
