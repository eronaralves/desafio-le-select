import styled from "styled-components";
import InputMask from "react-input-mask";

interface StyleContainerInputProps {
  $icon_show: boolean;
  height_input?: number;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerInput = styled.div<StyleContainerInputProps>`
  width: 100%;
  height: ${({ height_input }) =>
    height_input ? `${height_input}px` : "56px"};

  display: flex;
  align-items: center;

  border-radius: 6px;
  background-color: ${({ $icon_show, theme }) =>
    $icon_show && theme.colors.white};

  border: 3px solid ${({ theme }) => theme.colors.white};

  &:focus-within {
    border-color: #6495ed;
  }
`;

export const Input = styled(InputMask)`
  width: 100%;
  height: 100%;
  padding: 8px 12px;

  font-size: 14px;
  font-weight: 600;

  border: none;
  color: ${({ theme }) => theme.colors.blue300};

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::placeholder {
    font-weight: 500;
    font-style: italic;
    opacity: 50%;
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 660px) {
    font-size: 12px;
  }
`;

export const BoxIcon = styled.div`
  padding-inline: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;
