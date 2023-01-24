import React, { useCallback, useRef, useEffect, useState } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";

import * as S from "./Forms.style";

const Personal = ({
  onSubmit,
  previousStep,
  step,
  setTitle,
  formData,
  updateFields,
}: any) => {
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm();

  setTitle("Dados pessoais");

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

  const getAddress = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    let cep = e.currentTarget.value;
    if (cep?.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        setData(res.data);
        setValue("neighborhood", res.data.bairro);
        setValue("street", res.data.logradouro);
        setValue("city", res.data.localidade);
        setFocus("neighborhood", { shouldSelect: true })
        setFocus("street", { shouldSelect: true })
        setFocus("city", { shouldSelect: true })
      });
    }
  }, []);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label>
        Nome*
        <S.Input
          placeholder="Nome"
          errors={errors.name}
          autoFocus
          {...register("name", {
            required: true,
            value: formData.name,
            onBlur: (e) => updateFields("name", e.currentTarget.value),
          })}
        />
      </S.Label>
      {errors.name && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        Celular*
        <S.Input
          placeholder="Celular"
          errors={errors.celphone}
          onKeyUp={(e) => handleKeyUp(e, "celphone")}
          {...register("celphone", {
            required: true,
            value: formData.celphone,
            onBlur: (e) => updateFields("celphone", e.currentTarget.value),
          })}
        />
      </S.Label>
      {errors.celphone && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        CPF*
        <S.Input
          placeholder="CPF"
          errors={errors.cpf}
          autoFocus
          onKeyUp={(e) => handleKeyUp(e, "cpf")}
          {...register("cpf", {
            required: true,
            value: formData.cpf,
            onBlur: (e) => updateFields("cpf", e.currentTarget.value),
          })}
        />
      </S.Label>
      {errors.cpf && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        CEP*
        <S.Input
          placeholder="CEP"
          errors={errors.cep}
          autoFocus
          onKeyUp={(e) => handleKeyUp(e, "cep")}
          {...register("cep", {
            required: true,
            onChange: (e) => {
              getAddress(e);
            },
            value: formData.cep,
            onBlur: (e) => updateFields("cep", e.currentTarget.value),
          })}
        />
      </S.Label>
      {errors.cep && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        Bairro*
        <S.Input
          placeholder="Bairro"
          errors={errors.cep}
          autoFocus
          {...register("neighborhood", {
            required: true,
            value: formData.neighborhood,
            onBlur: (e) => updateFields("neighborhood", e.currentTarget.value),
          })}
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
          autoFocus
          {...register("street", {
            required: true,
            value: formData.street,
            onBlur: (e) => updateFields("street", e.currentTarget.value),
          })}
        />
      </S.Label>
      {errors.street && <S.InputError>Esse campo é obrigatório</S.InputError>}
      <S.Label>
        Cidade*
        <S.Input
          placeholder="Cidade"
          errors={errors.city}
          {...register("city", {
            required: true,
            value: formData.city,
            onBlur: (e) => updateFields("city", e.currentTarget.value),
          })}
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
