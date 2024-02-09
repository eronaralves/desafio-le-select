import { ButtonHTMLAttributes } from 'react';

// Styles
import * as S from './styles'

// Intefaces
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonStyle?: S.ButtonTypeProps
}

export function Button({ title, buttonStyle = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <S.Container buttonStyle={buttonStyle} {...rest}>
      {title}
    </S.Container>
  )
}