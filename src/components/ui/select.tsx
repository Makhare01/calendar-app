import {
  Box,
  FormHelperText,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";
import { forwardRef } from "react";

export type Option<T> = {
  label: string;
  value: T;
};

type Props = SelectProps & {
  helperText?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Array<Option<any>>;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ helperText, options, ...props }: Props, ref) => {
    return (
      <Box>
        <MuiSelect
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 250,
                border: 1,
                borderColor: "divider",
                mt: 0.5,
                borderRadius: 2,
              },
            },
          }}
          {...props}
          ref={ref}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
        {props.error && helperText && (
          <FormHelperText sx={{ mt: 0.5, color: "error.main" }}>
            {helperText}
          </FormHelperText>
        )}
      </Box>
    );
  }
);
