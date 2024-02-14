import { styled } from "styled-components";

// Images
import BackgroundLogin from "../../assets/images/background-login.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-image: url(${BackgroundLogin});
  background-repeat: no-repeat;
  background-size: cover;

  background-color: ${({ theme }) => theme.colors.blue700};

  @media (min-height: 770px) {
    height: 100vh;
  }
`;
