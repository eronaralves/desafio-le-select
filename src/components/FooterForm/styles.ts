import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
  }
`;

export const Description = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
`;