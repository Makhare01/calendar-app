import { createTheme } from "@mui/material";

const FiraGO = "FiraGO, sans-serif";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4B70F5",
    },
    secondary: {
      main: "#D9D9D9",
    },
    text: {
      primary: "#121212",
      secondary: "#4F4F4F",
      disabled: "#E4E7F2",
    },
    background: {
      default: "#4B70F5",
      paper: "#FFFFFF",
    },
    divider: "#CACACA",
  },
});

theme.components = {
  ...theme.components,
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          "& fieldset": {
            borderColor: theme.palette.text.disabled,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.divider,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.divider,
          },
        },
        "& .MuiInputBase-input": {
          fontFamily: FiraGO,
          fontSize: "14px",
          color: theme.palette.text.primary,
        },
      },
    },
  },

  MuiSelect: {
    styleOverrides: {
      select: {
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        "&:focus": {
          borderRadius: "8px",
        },
      },
      icon: {
        color: theme.palette.text.secondary,
        fontSize: "24px",
      },
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.text.disabled,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.divider,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.divider,
        },
        borderRadius: "8px",
        fontFamily: "YourCustomFont, sans-serif",
        fontSize: "14px",
        color: theme.palette.text.primary,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        border: 1,
        borderColor: theme.palette.text.disabled,
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        marginLeft: 8,
        color: theme.palette.text.primary,
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        fontFamily: FiraGO,
        fontWeight: 500,
      },
    },
  },
};

const { pxToRem } = theme.typography;

theme.typography = {
  ...theme.typography,
  h1: {
    fontFamily: FiraGO,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
    fontWeight: 600,
    letterSpacing: "0.68px",
    color: theme.palette.text.primary,
  },

  h2: {
    fontFamily: FiraGO,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    letterSpacing: "0.52px",
    color: theme.palette.text.primary,
  },

  h3: {
    fontFamily: FiraGO,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(21),
    fontWeight: 600,
    letterSpacing: "0.45px",
    color: theme.palette.text.primary,
  },

  h4: {
    fontFamily: FiraGO,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(21),
    fontWeight: 600,
    letterSpacing: "0.45px",
    color: theme.palette.text.primary,
  },

  body1: {
    fontFamily: FiraGO,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(19),
    fontWeight: 500,
    letterSpacing: "0.52px",
    color: theme.palette.text.primary,
  },

  body2: {
    fontFamily: FiraGO,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(18),
    fontWeight: 400,
    letterSpacing: "0.52px",
    color: theme.palette.text.primary,
  },

  caption: {
    fontFamily: FiraGO,
    display: "inline-block",
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: 300,
    letterSpacing: "0.52px",
    color: theme.palette.text.primary,
  },
};
