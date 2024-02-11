import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* outline: 2px solid red; */
  div {
    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    border: 2px solid transparent;
    transition: border-color 0.3s ease;
    outline: none; /* Remove a borda padrão */
  }

  & > div:focus {
    border: 2px solid red;
  }
`;

export const Description = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
`;
