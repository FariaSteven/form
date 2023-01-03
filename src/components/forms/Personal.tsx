import React from "react";
import { SubmitHandler, useForm, UseFormSetError } from "react-hook-form";

import * as S from "./Forms.style";

const Personal = ({ onSubmit, previousStep, step, setTitle }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log('ERRORS', errors)

  setTitle("Dados Pessoais");

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Input placeholder="Nome" {...register("name", { required: true })} />
      {errors.name && <span>Esse campo é obrigatório</span>}
      <S.Input placeholder="Email" type={'email'} {...register("email", { required: true })} />
      {errors.email && <span>Esse campo é obrigatório</span>}
      <S.Input
        type="password"
        placeholder="Senha"
        {...register("password", { required: true, minLength: {
          value: 8,
          message: "Password must have at least 8 characters"
        } })}
      />
      {errors.password && <p>{errors.password?.message ? errors.password?.message : 'Esse campo é obrigatório' }</p>}
      <S.Input
        type="password"
        placeholder="Confirmar senha"
        {...register("confirmPassword", { required: true })}
      />
      {errors.confirmPassword && <span>Esse campo é obrigatório</span>}
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

export default Personal;
