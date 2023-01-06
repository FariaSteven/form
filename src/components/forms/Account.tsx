import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import * as S from "./Forms.style";

const Account = ({ onSubmit, previousStep, step, setTitle }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  setTitle("Dados cadastrais");

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label>
        Email*
        <S.Input
          placeholder="Email*"
          type={"email"}
          errors={errors.email}
          {...register("email", { required: true })}
        />
      </S.Label>
      {errors.email && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        Senha*
        <S.Input
          placeholder="Senha"
          type="password"
          errors={errors.password}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Senha deve ter pelo menos 8 caractéres.",
            },
          })}
        />
      </S.Label>

      {errors.password && (
        <S.InputError>
          {errors.password?.message
            ? errors.password?.message
            : "Esse campo é obrigatório"}
        </S.InputError>
      )}
      <S.Label>
        Confirmar senha*
        <S.Input
          placeholder="Confirmar senha"
          type="password"
          errors={errors.confirmPassword}
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === password.current || "As senhas não coincidem.",
          })}
        />
      </S.Label>

      {errors.confirmPassword && (
        <S.InputError>
          {errors.confirmPassword?.message
            ? errors.confirmPassword?.message
            : "Esse campo é obrigatório"}
        </S.InputError>
      )}
      <S.ButtonsWrapper>
        <S.Button
          disabled={step > 1 ? false : true}
          onClick={(e) => previousStep(e)}
        >
          Voltar
        </S.Button>
        <S.Button type="submit">Avançar</S.Button>
      </S.ButtonsWrapper>
    </S.Form>
  );
};

export default Account;
