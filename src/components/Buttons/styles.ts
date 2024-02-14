import { styled } from "styled-components";

export type ButtonTypeProps = "PRIMARY" | "SECONDARY";

interface Props {
  $button_style: ButtonTypeProps;
}

export const Container = styled.button<Props>`
  width: 100%;
  max-width: 160px;
  height: 48px;
  padding-block: 12px;

  font-size: 15px;
  font-weight: 700;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  color: ${({ theme, $button_style }) =>
    $button_style === "PRIMARY" ? theme.colors.blue700 : theme.colors.white};
  background-color: ${({ theme, $button_style }) =>
    $button_style === "PRIMARY" ? theme.colors.white : theme.colors.blue700};

  &:hover {
    opacity: ${({ $button_style }) => $button_style === "PRIMARY" && "0.8"};
    background-color: ${({ theme, $button_style }) =>
      $button_style === "PRIMARY" ? theme.colors.white : theme.colors.blue300};
  }
`;
