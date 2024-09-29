import { Box, Typography } from "@mui/material";
import { Option, Select } from "./ui/select";
import { useCalendarPeriodStore } from "~/app/store";
import { Periods } from "~/lib/_types";
import { IconLogo } from "~/app/assets/icons";

const calendarPeriodOptions: Array<Option<Periods>> = [
  {
    label: "კვირა",
    value: "WEEK",
  },
  {
    label: "თვე",
    value: "MONTH",
  },
];

export const Header = () => {
  const period = useCalendarPeriodStore((store) => store.period);
  const setCalendarPeriod = useCalendarPeriodStore(
    (store) => store.setCalendarPeriod
  );

  return (
    <Box
      sx={{
        flex: "0 1",
        px: 3,
        py: 1.5,
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconLogo sx={{ color: "primary.main", fontSize: 28 }} />
        <Typography variant="body1">კალენდარი</Typography>
      </Box>

      <Select
        options={calendarPeriodOptions}
        value={period}
        onChange={(event) => {
          const value = event.target.value as Periods;

          if (value) {
            setCalendarPeriod(value);
          }
        }}
        placeholder="test"
        defaultValue="WEEK"
        sx={{ minWidth: 200 }}
      />
    </Box>
  );
};
