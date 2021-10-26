import { ReactNode } from "react";
import { Container } from "./styles";

type BoxProps = {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}