import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import * as S from "./Forms.style";

const Plans = ({ onSubmit, previousStep, step, setTitle }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  setTitle("Nossos Planos");

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Input placeholder="Nome" {...register("name", { required: true })} />
      {errors.name && <span>Esse campo é obrigatório</span>}
      <S.Input placeholder="Email" {...register("email", { required: true })} />
      {errors.email && <span>Esse campo é obrigatório</span>}
      <S.Input
        type="password"
        placeholder="Senha"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Esse campo é obrigatório</span>}
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

export default Plans;
