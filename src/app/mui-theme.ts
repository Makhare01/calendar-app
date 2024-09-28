import { createTheme } from "@mui/material";

const FiraGO = "FiraGO, sans-serif";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4B70F5",
    },
    background: {
      default: "#4B70F5",
      paper: "#FFFFFF",
    },
    divider: "#CACACA",
  },
});

const { pxToRem } = theme.typography;

theme.typography = {
  ...theme.typography,
  h1: {
    fontFamily: FiraGO,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
    fontWeight: 600,
    letterSpacing: "0.68px",
  },

  h2: {
    fontFamily: FiraGO,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    letterSpacing: "0.52px",
  },

  h3: {
    fontFamily: FiraGO,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(21),
    fontWeight: 600,
    letterSpacing: "0.45px",
  },

  h4: {
    fontFamily: FiraGO,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(21),
    fontWeight: 600,
    letterSpacing: "0.45px",
  },

  body1: {
    fontFamily: FiraGO,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(19),
    fontWeight: 500,
    letterSpacing: "0.52px",
  },

  body2: {
    fontFamily: FiraGO,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(18),
    fontWeight: 400,
    letterSpacing: "0.52px",
  },

  caption: {
    fontFamily: FiraGO,
    display: "inline-block",
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: 300,
    letterSpacing: "0.52px",
  },
};
