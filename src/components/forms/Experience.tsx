import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import * as S from "./Forms.style";

const animatedComponents = makeAnimated();

const Experience = ({ onSubmit, previousStep, step, setTitle }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const [option, setOption] = useState();

  useEffect(() => {
    option;
  }, [option]);

  setTitle("Experiência");

  const options = [
    { value: "reactjs", label: "ReactJS" },
    { value: "nodejs", label: "NodeJS" },
    { value: "mongodb", label: "MongoDB" },
  ];

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
      <Controller
        name="skills"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Select
            options={options}
            onChange={onChange}
            isMulti={true}
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
          />
        )}
      />

      {errors.skills && <S.InputError>Esse campo é obrigatório</S.InputError>}
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

export default Experience;
