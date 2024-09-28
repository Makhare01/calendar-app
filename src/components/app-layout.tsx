import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Header } from "./header";

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          p: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
