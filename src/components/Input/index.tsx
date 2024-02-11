import { forwardRef } from "react";
import { Props } from "react-input-mask";

// Icon
import { IconType } from "react-icons";

// Styles
import * as S from "./styles";

// Interfaces
interface InputProps extends Props {
  label: string;
  mask: string;
  icon?: IconType | null;
  height_input?: number;
  handleIcon?: () => void;
}

function Input({
  label,
  mask,
  height_input,
  icon: IconComponent = null,
  handleIcon,
  ...rest
}: InputProps) {
  return (
    <S.Container>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.ContainerInput
        height_input={height_input}
        icon_show={IconComponent !== null && true}
      >
        <S.Input id={label} mask={mask} autoComplete="off" {...rest} />
        {IconComponent && (
          <S.BoxIcon>
            <IconComponent size={20} color="#808080" onClick={handleIcon} />
          </S.BoxIcon>
        )}
      </S.ContainerInput>
    </S.Container>
  );
}

const ForwardedInput = forwardRef(Input);

export { ForwardedInput };
