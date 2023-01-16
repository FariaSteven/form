import React, { useEffect, useState } from "react";
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
    formState: { errors },
  } = useForm();

  const [selectedOption, setOption] = useState([])

  setTitle("Experiência");

  const options = [
    { value: "reactjs", label: "ReactJS" },
    { value: "nodejs", label: "NodeJS" },
    { value: "mongodb", label: "MongoDB" },
  ];

  useEffect(() => {
    setValue("languages", selectedOption)
    if(formData?.languages[0]) {
      console.log(formData?.languages?.map((item: any) => item))
      setValue("languages", formData?.languages?.map((item: any) => item))
    }
  }, [selectedOption])

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="languages"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, name, ref } }) => (
          <Select
            options={options}
            isMulti={true}
            onBlur={() => {
              updateFields("languages", value);
            }}
            // defaultValue={formData?.languages?.map((item: any) => {return item?.value})}
            // defaultValue={
            //   formData?.languages?.map((item: any) => item.value)
            // }
            onChange={(e) => setOption(e)}
            value={!formData?.languages[0] ? selectedOption : formData?.languages?.map((item: any) => item)}
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
