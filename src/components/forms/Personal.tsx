import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

import * as S from "./Forms.style";

const Personal = ({ onSubmit, previousStep, step, setTitle }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [data, setData]: any = useState();

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>, field: string) => {
      if (field === "celphone") {
        e.currentTarget.maxLength = 11;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
        e.currentTarget.value = value;
      }
      if (field === "cep") {
        e.currentTarget.maxLength = 9;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{5})(\d{3})/, "$1-$2");
        e.currentTarget.value = value;
      }
      if (field === "cpf") {
        e.currentTarget.maxLength = 11;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        e.currentTarget.value = value;
      }
    },
    []
  );

  setTitle("Dados pessoais");

  const getAddress = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    let cep = e.currentTarget.value;
    if (cep?.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      console.log("aaaa", data);
      console.log("aaaa", cep);
    }
  }, []);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label>
        Nome*
        <S.Input
          placeholder="Nome"
          errors={errors.name}
          {...register("name", { required: true })}
        />
      </S.Label>
      {errors.name && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        Celular*
        <S.Input
          placeholder="Celular"
          errors={errors.celphone}
          onKeyUp={(e) => handleKeyUp(e, "celphone")}
          {...register("celphone", { required: true })}
        />
      </S.Label>
      {errors.celphone && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        CPF*
        <S.Input
          placeholder="CPF"
          errors={errors.cpf}
          onKeyUp={(e) => handleKeyUp(e, "cpf")}
          {...register("cpf", { required: true })}
        />
      </S.Label>
      {errors.name && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        CEP*
        <S.Input
          placeholder="CEP"
          errors={errors.cep}
          onKeyUp={(e) => handleKeyUp(e, "cep")}
          {...register("cep", {
            required: true,
            onChange: (e) => getAddress(e),
          })}
        />
      </S.Label>
      {errors.cep && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        Bairro*
        <S.Input
          placeholder="Bairro"
          errors={errors.neighborhood}
          value={data?.bairro}
          {...register("neighborhood", { required: true })}
        />
      </S.Label>
      {errors.neighborhood && (
        <S.InputError>Esse campo é obrigatório</S.InputError>
      )}
      <S.Label>
        Rua*
        <S.Input
          placeholder="Rua"
          errors={errors.street}
          value={data?.logradouro}
          {...register("street", { required: true })}
        />
      </S.Label>
      {errors.street && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        Cidade*
        <S.Input
          placeholder="Cidade"
          errors={errors.city}
          value={data?.localidade}
          {...register("city", { required: true })}
        />
      </S.Label>
      {errors.city && <S.InputError>Esse campo é obrigatório</S.InputError>}
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
