import { useState } from 'react';

// Icons
import { BsXSquare, BsSquare } from "react-icons/bs";

// Styles
import * as S from './styles'
import { useTheme } from 'styled-components';

// Interfaces
interface FooterFormProps {
  description: string;
  isChecked: boolean;
  setChecked: any;
}

export function FooterForm({ description, isChecked, setChecked }: FooterFormProps) {
  const theme = useTheme()

  return (
    <S.Container>
      <div onClick={() => setChecked(!isChecked)}>
        {isChecked ? (
          <BsXSquare size={23} color={theme.colors.blue100} />
        ): (
          <BsSquare size={23}  color={theme.colors.blue100} />
        )}
        <S.Description>{description}</S.Description>
      </div>
    </S.Container>
  )
}