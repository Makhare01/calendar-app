import {
  Box,
  TextField as MuiTextField,
  TextFieldProps,
  FormHelperText,
} from "@mui/material";
import { forwardRef } from "react";

type Props = TextFieldProps & { helperText?: string };

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ helperText, ...props }: Props, ref) => {
    return (
      <Box
        sx={{
          width: 1,
        }}
      >
        <MuiTextField {...props} ref={ref} />

        {props.error && helperText && (
          <FormHelperText sx={{ mt: 0.5, color: "error.main" }}>
            {helperText}
          </FormHelperText>
        )}
      </Box>
    );
  }
);
