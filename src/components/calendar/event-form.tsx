import { Box, Button, FormControl, FormLabel } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { timeIntervals } from "~/lib/utils";
import { TextField } from "../ui/text-field";
import { Select } from "../ui/select";
import { DatePicker } from "../ui/date-picker";
import { CalendarEvent, TAddEventFormSchema } from "~/lib/_types";
import { useCalendarEventsStore, useUsersStore } from "~/app/store";
import { isAfter } from "date-fns";

type Props = {
  fromDate?: Date;
  startTime?: number;
  onSave: () => void;
  defaultValues?: CalendarEvent;
};

export const EventForm = ({
  fromDate,
  startTime,
  onSave,
  defaultValues,
}: Props) => {
  const users = useUsersStore((state) => state.users);
  const setEvent = useCalendarEventsStore((state) => state.setEvent);
  const editEvent = useCalendarEventsStore((state) => state.editEvent);

  const { control, handleSubmit, watch, setValue, reset } =
    useForm<CalendarEvent>({
      defaultValues: defaultValues ?? {
        id: crypto.randomUUID(),
        from: fromDate,
        to: undefined,
        startMinute: startTime,
        endMinute: undefined,
        title: "",
        description: "",
        guests: [],
      },
      resolver: zodResolver(TAddEventFormSchema),
    });

  const [startMinute, endMinute, from, to] = watch([
    "startMinute",
    "endMinute",
    "from",
    "to",
  ]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((values) => {
        if (defaultValues) {
          editEvent(values);
        } else {
          setEvent(values);
        }
        reset();
        onSave();
      })}
      sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => (
          <FormControl>
            <FormLabel>სათაური</FormLabel>
            <TextField
              fullWidth
              placeholder="Event Title"
              variant="outlined"
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              {...field}
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <FormControl>
            <FormLabel>აღწერა</FormLabel>
            <TextField
              {...field}
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              multiline
              rows={2}
              variant="outlined"
              sx={{ p: 0 }}
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="from"
        render={({ field, fieldState }) => (
          <FormControl>
            <FormLabel>დაწყების თარიღი</FormLabel>
            <DatePicker
              {...field}
              onChange={(date) => {
                if (date && to) {
                  const isAfterDate = isAfter(date, to);
                  if (isAfterDate) setValue("to", undefined);
                }

                field.onChange(date);
              }}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="to"
        render={({ field, fieldState }) => (
          <FormControl>
            <FormLabel>დასრულების თარიღი</FormLabel>
            <DatePicker
              {...field}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              minDate={from}
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="startMinute"
        render={({ field, fieldState }) => (
          <FormControl>
            <FormLabel>დაწყების დრო</FormLabel>
            <Select
              {...field}
              onChange={(event) => {
                const value = Number(event.target.value);
                if (endMinute && value >= endMinute) {
                  setValue("endMinute", NaN);
                }
                field.onChange(event);
              }}
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              options={Object.keys(timeIntervals).map((key) => ({
                label: timeIntervals[key],
                value: Number(key),
              }))}
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="endMinute"
        render={({ field, fieldState }) => (
          <FormControl>
            <FormLabel>დასრულების დრო</FormLabel>
            <Select
              {...field}
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              options={Object.keys(timeIntervals)
                .filter((item) => Number(item) > startMinute)
                .map((key) => ({
                  label: timeIntervals[key],
                  value: Number(key),
                }))}
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="guests"
        render={({ field, fieldState }) => (
          <FormControl>
            <FormLabel>სტუმრები</FormLabel>
            <Select
              {...field}
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              multiple
              options={users.map((user) => ({
                label: user.name,
                value: user.id,
              }))}
            />
          </FormControl>
        )}
      />

      <Button variant="contained" type="submit">
        {defaultValues ? "რედაქტირება" : "დამატება"}
      </Button>
    </Box>
  );
};
