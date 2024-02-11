import { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../axios";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";

// Images
import LogoLeSelect from "../../assets/images/logo-leselect.png";
import LogoLePono from "../../assets/images/logos-lepono.png";

// Icons
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

// Components
import { ForwardedInput } from "../../components/Input";
import { Button } from "../../components/Buttons";
import { FooterForm } from "../../components/FooterForm";

// Styles
import * as S from "./styles";

const formSchema = z.object({
  contact_name: z.string().min(1, "Digite seu nome"),
  company: z.string().min(1, "Digite o nome da empresa"),
  taxvat: z.string().min(1, "Digite seu CNPJ"),
  phone: z.string().min(14, "Coloque os 10 numeros"),
  email: z.string().min(1, "Digite seu email").email("Digite um email válido"),
  password: z
    .string()
    .min(1, "Digite sua senha")
    .min(5, "Sua senha precisa ter pelo menos 5 caracteres"),
  knowCompany: z.string().optional(),
});

export type FormSignUp = z.infer<typeof formSchema>;

function SignUp() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [termoOfUse, setTermoOfUse] = useState(false);

  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSignUp>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      knowCompany: "2",
    },
  });

  async function onSingInSubmit(formData: FormSignUp) {
    if (termoOfUse) {
      try {
        const response = await api.post("customers/create", formData);
        const data = response.data;

        console.log(data);
        navigate("/login");

        toast("Cadastrado com sucesso!", {
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSingInSubmit)}>
      <S.LogoLeSelect src={LogoLeSelect} alt="Logo da marca leselect" />
      <S.ContentForm>
        <S.Title>Cadastro</S.Title>

        <S.BoxInputs>
          <Controller
            name="contact_name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ForwardedInput
                type="text"
                label="Nome"
                mask=""
                placeholder="Digite seu nome"
                height_input={48}
                {...field}
              />
            )}
          />
          <span>{errors.contact_name?.message}</span>
        </S.BoxInputs>
        <S.BoxInputs>
          <Controller
            name="company"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ForwardedInput
                type="text"
                label="Empresa"
                mask=""
                placeholder="Digite o nome da empresa"
                height_input={48}
                {...field}
              />
            )}
          />
          <span>{errors.company?.message}</span>
        </S.BoxInputs>

        <S.ContainerInputs>
          <S.BoxInputs>
            <Controller
              name="taxvat"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ForwardedInput
                  type="text"
                  label="CNPJ"
                  mask="99.999.999/9999-99"
                  placeholder="00.000.000/0000-00"
                  height_input={48}
                  {...field}
                />
              )}
            />
            <span>{errors.taxvat?.message}</span>
          </S.BoxInputs>
          <S.BoxInputs>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ForwardedInput
                  type="text"
                  label="Telefone"
                  mask="(99) 9999-9999"
                  placeholder="(xx) xxxx-xxxx"
                  height_input={48}
                  {...field}
                />
              )}
            />
            <span>{errors.phone?.message}</span>
          </S.BoxInputs>
        </S.ContainerInputs>

        <S.ContainerInputs>
          <S.BoxInputs>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ForwardedInput
                  label="E-mail"
                  mask=""
                  placeholder="Digite seu e-mail"
                  height_input={48}
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
                <ForwardedInput
                  label="Senha"
                  type={isVisiblePassword ? "text" : "password"}
                  mask=""
                  placeholder="Digite sua senha"
                  icon={isVisiblePassword ? FaRegEye : FaRegEyeSlash}
                  handleIcon={() => setIsVisiblePassword(!isVisiblePassword)}
                  height_input={48}
                  {...field}
                />
              )}
            />
            <span>{errors.password?.message}</span>
          </S.BoxInputs>
        </S.ContainerInputs>

        <FooterForm
          description="Li e aceito os termos de uso"
          isChecked={termoOfUse}
          setChecked={setTermoOfUse}
        />

        <S.ContainerButtons>
          <Button title="Cadastrar" />
          <Button
            type="button"
            title="Voltar"
            button_style="SECONDARY"
            onClick={() => navigate("/login")}
          />
        </S.ContainerButtons>
      </S.ContentForm>

      <S.LogoLePono src={LogoLePono} alt="Logo da marca lepono" />
    </S.Form>
  );
}

const ForwardedSignUp = forwardRef(SignUp);

export { ForwardedSignUp };
