import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import * as S from "./Forms.style";

const Experience = ({
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
    control,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm();

  const [selectedOption, setOption] = useState(formData?.languages);

  setTitle("Experiência");

  const options = [
    { value: "reactjs", label: "ReactJS" },
    { value: "nodejs", label: "NodeJS" },
    { value: "mongodb", label: "MongoDB" },
  ];

  useEffect(() => {
    setValue("languages", selectedOption);
  }, [selectedOption]);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="languages"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Select
            options={options}
            onChange={onChange}
            isMulti={true}
            onBlur={() => {updateFields("languages", value)}}
            defaultValue={selectedOption && selectedOption}
            value={value}
            name={name}
            ref={ref}
          />
        )}
      />

      {errors.languages && (
        <S.InputError>Esse campo é obrigatório</S.InputError>
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

export default Experience;
