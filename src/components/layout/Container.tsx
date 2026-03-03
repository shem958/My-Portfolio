import { Container as MuiContainer } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <MuiContainer
      maxWidth="lg"
      sx={{
        py: 10,
      }}
    >
      {children}
    </MuiContainer>
  );
}