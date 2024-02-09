import { Props } from 'react-input-mask'

// Icon
import { IconType } from 'react-icons';

// Styles
import * as S from './styles'

// Interfaces
interface InputProps extends Props {
  label: string;
  mask: string;
  icon?: IconType;
  heightInput?: number;
  handleIcon?: () => void;
}

export function Input({ label, mask, heightInput, icon: IconComponent, handleIcon, ...rest }: InputProps) {

  return (
    <S.Container>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.ContainerInput heightInput={heightInput} icon={IconComponent ? true : false}>
        <S.Input id={label} mask={mask} autoComplete='off' {...rest} />
        {IconComponent && (
          <S.BoxIcon>
            <IconComponent size={20} color='#808080' onClick={handleIcon} />
          </S.BoxIcon>
        )}
      </S.ContainerInput>
    </S.Container>
  )
}