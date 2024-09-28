import { Box, Divider, Popover, Typography } from "@mui/material";
import { getMinutes } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { CALENDAR_SIZES, calendarItemStyles } from "~/lib/utils";

type Props = {
  daysCount: number;
  day: number;
  hour: number;
  isToday: boolean;
};

export const CalendarItem = ({ daysCount, day, hour, isToday }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const open = Boolean(anchorEl);
  const currentMinute = isToday ? getMinutes(new Date()) : null;

  const ref = useRef<HTMLHRElement | null>(null);

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
          borderBottom: hour === 24 ? 0 : 1, // Disable last border
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
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        }}
        PaperProps={{
          sx: {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box
          sx={{
            minWidth: 200,
          }}
        >
          <Box
            sx={{
              height: 30,
              bgcolor: "secondary.main",
              px: 1,
            }}
          >
            close
          </Box>
          <Box
            sx={{
              p: 1,
            }}
          >
            <Typography>Add event</Typography>
          </Box>
        </Box>
      </Popover>
    </>
  );
};
