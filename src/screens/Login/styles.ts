import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 721px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;

  padding: 30px 80px;
  background-color: ${({ theme }) => theme.colors.blue500};

  @media (max-width: 660px) {
    padding: 20px;
  }
`;

export const LogoLeSelect = styled.img`
  width: 196px;
  position: absolute;
  left: 41px;
  top: 44px;

  @media (max-width: 1200px) {
    width: 113px;
    position: initial;
  }
`;

export const ContentForm = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 33px;

  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray100};
`;

export const BoxInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  span {
    height: 10px;
    margin-top: 4px;

    font-size: 13px;
    color: red;
  }
`;

export const ContentInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const ContainerButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 50px;
`;

export const LogoLePono = styled.img`
  width: 113px;
  margin-top: auto;
`;
