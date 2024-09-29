import { Box, FormHelperText } from "@mui/material";
import {
  DatePicker as MuiDatePicker,
  DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { forwardRef } from "react";

type Props = DatePickerProps<Date> & {
  error?: boolean;
  helperText?: string;
};

export const DatePicker = forwardRef<HTMLDivElement, Props>(
  ({ error, helperText, ...props }: Props, ref) => {
    return (
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MuiDatePicker
          {...props}
          ref={ref}
          sx={{
            ...(error && {
              border: 1,
              borderColor: "error.main",
            }),
          }}
        />

        {error && helperText && (
          <FormHelperText sx={{ mt: 0.5, color: "error.main" }}>
            {helperText}
          </FormHelperText>
        )}
      </Box>
    );
  }
);
