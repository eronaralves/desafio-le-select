import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

// Images
import LogoLeSelect from "../../assets/images/logo-leselect.png";
import LogoLePono from "../../assets/images/logos-lepono.png";

// Components
import { Input } from "../../components/Input";
import { Button } from "../../components/Buttons";

// Form
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Styles
import * as S from "./styles";
import { api } from "../../services";

const formSchema = z.object({
  email: z.string().min(1, "Digite seu email").email("Digite um email válido"),
  password: z
    .string()
    .min(1, "Digite sua senha")
    .min(5, "Sua senha precisa ter pelo menos 5 caracteres"),
});

export type FormSignUp = z.infer<typeof formSchema>;

export function Login() {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSignUp>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();

  function handleToSignin() {
    navigate("/signup");
  }

  async function handleSignIn(formData: FormSignUp) {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      const data = response.data;

      sessionStorage.setItem("token", data.access_token);
      console.log(data);
      toast("Login concluido com sucesso!", {
        type: "success",
      });

      navigate("/");
    } catch (error) {
      console.log(error);

      toast("Erro ao tentar fazer o login", {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(handleSignIn)}>
      <S.LogoLeSelect src={LogoLeSelect} alt="Logo da marca Leselect" />
      <S.ContentForm>
        <S.Title>Log In</S.Title>

        <S.ContentInputs>
          <S.BoxInputs>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  label="E-mail"
                  type="email"
                  mask=""
                  placeholder="Digite seu e-mail"
                  disabled={loading}
                  {...field}
                />
              )}
            />
            <span>{errors.email?.message}</span>
          </S.BoxInputs>

          <S.BoxInputs>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  label="Senha"
                  type="password"
                  mask=""
                  placeholder="Digite sua senha"
                  disabled={loading}
                  {...field}
                />
              )}
            />
            <span>{errors.password?.message}</span>
          </S.BoxInputs>
          <S.ForgetPassword>Esqueci minha senha</S.ForgetPassword>
        </S.ContentInputs>

        <S.ContainerButtons>
          <Button
            type="submit"
            title={loading ? "Entrandoo..." : "Entrar"}
            disabled={loading}
          />
          <Button
            type="button"
            title="Cadastrar"
            $buttonStyle="SECONDARY"
            onClick={handleToSignin}
            disabled={loading}
          />
        </S.ContainerButtons>
      </S.ContentForm>

      <S.LogoLePono src={LogoLePono} alt="Logo da marca Lepono" />
    </S.Form>
  );
}
