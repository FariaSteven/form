import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Step from "../../components/step/Step";

import "./signUp.css";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [step, setStep]: Number | any = useState(1);
  const [title, setTitle]: String | any = useState('Cadastro');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const nextStep = (e: Object | any) => {
    e.preventDefault();
    setStep(step + 1);
    setTitle('teste');
  };

  const previousStep = (e: Object | any) => {
    e.preventDefault();
    setStep(step - 1);
    setTitle('Cadastro');
  };

  return (
    <Step step={step} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome" {...register("name")} />
        <input placeholder="Email" {...register("email", { required: true })} />
        <input type="password" placeholder="Senha" {...register("password", { required: true })} />
        <input
          type="password"
          placeholder="Confirmar senha"
          {...register("confirmPassword", { required: true })}
        />
        {errors.email && <span>Esse campo é obrigatório</span>}
        {errors.name && <span>Esse campo é obrigatório</span>}
        {errors.password && <span>Esse campo é obrigatório</span>}
        {errors.confirmPassword && <span>Esse campo é obrigatório</span>}
        {/* <input type="submit" /> */}
        <div className="formButtons">
          <button disabled={step > 1 ? false : true} onClick={(e) => previousStep(e)}>Voltar</button>
          <button onClick={(e) => nextStep(e)}>Avançar</button>
        </div>
        
      </form>
    </Step>
  );
};

export default SignUp;
