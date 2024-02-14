import { ButtonHTMLAttributes, forwardRef } from "react";

// Styles
import * as S from "./styles";

// Interfaces
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  $buttonStyle?: S.ButtonTypeProps;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, $buttonStyle = "PRIMARY", ...rest }, ref) => {
    return (
      <S.Container ref={ref} $button_style={$buttonStyle} {...rest}>
        {title}
      </S.Container>
    );
  },
);
