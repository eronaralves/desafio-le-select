import { ButtonHTMLAttributes } from "react";

// Styles
import * as S from "./styles";

// Intefaces
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  button_style?: S.ButtonTypeProps;
}

export function Button({
  title,
  button_style = "PRIMARY",
  ...rest
}: ButtonProps) {
  return (
    <S.Container button_style={button_style} {...rest}>
      {title}
    </S.Container>
  );
}
