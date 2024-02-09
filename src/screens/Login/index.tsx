import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Images
import LogoLeSelect from "../../assets/images/logo-leselect.png";
import LogoLePono from "../../assets/images/logos-lepono.png";

// Components
import { Input } from "../../components/Input";
import { Button } from "../../components/Buttons";
import { FooterForm } from "../../components/FooterForm";

// Styles
import * as S from "./styles";

export function Login() {
  const [forgotPassword, setForgotPassword] = useState(false);

  const navigate = useNavigate();

  function handleToSignin() {
    navigate("/signin");
  }

  return (
    <S.Form>
      <S.LogoLeSelect src={LogoLeSelect} alt="Logo da marca Leselect" />
      <S.ContentForm>
        <S.Title>Log In</S.Title>

        <S.ContentInputs>
          <Input
            name="email"
            label="E-mail"
            type="email"
            mask=""
            placeholder="Digite seu e-mail"
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            mask=""
            placeholder="Digite sua senha"
          />

          <FooterForm
            description="Esqueci minha senha"
            isChecked={forgotPassword}
            setChecked={setForgotPassword}
          />
        </S.ContentInputs>

        <S.ContainerButtons>
          <Button title="Entrar" />
          <Button
            type="button"
            title="Cadastrar"
            buttonStyle="SECONDARY"
            onClick={handleToSignin}
          />
        </S.ContainerButtons>
      </S.ContentForm>

      <S.LogoLePono src={LogoLePono} alt="Logo da marca Lepono" />
    </S.Form>
  );
}
