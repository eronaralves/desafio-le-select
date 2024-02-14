import { ReactNode } from "react";

// Styles
import * as S from "./styles";

interface ContainerLoginProps {
  children: ReactNode;
}

export function ContainerAuthentication({ children }: ContainerLoginProps) {
  return <S.Container>{children}</S.Container>;
}
