import React, { useCallback, useEffect, useState } from "react";

import Account from "../../components/forms/Account";
import Personal from "../../components/forms/Personal";
import Plans from "../../components/forms/Experience";
import Step from "../../components/step/Step";

import { useQuery } from "@apollo/client/react";
import { GET_USERS } from '../../gql/Query';

const SignUp = () => {
  const [step, setStep]: Number | any = useState(1);
  const [title, setTitle]: String | any = useState("");

  const { loading, error, data } = useQuery(GET_USERS);
  console.log('data', data)

  const [formData, setFormData]: any = useState({
    name: data?.users[0]?.name,
    celphone: "",
    cpf: "",
    cep: "",
    neighborhood: "",
    street: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
    languages: [],
  });

  const updateFields = useCallback((key: any, value: any) => {
    setFormData((prev: any) => {
      return { ...prev, [key]: value };
    });
  }, [formData])

  const onSubmit = (data: any) => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const renderStep = useCallback(() => {
    switch (step) {
      case 2:
        return (
          <Account
            onSubmit={onSubmit}
            previousStep={previousStep}
            step={step}
            setTitle={setTitle}
            formData={formData}
            setFormData={setFormData}
            updateFields={updateFields}
          />
        );

      case 3:
        return (
          <Plans
            onSubmit={onSubmit}
            previousStep={previousStep}
            step={step}
            setTitle={setTitle}
            formData={formData}
            setFormData={setFormData}
            updateFields={updateFields}
          />
        );

      default:
        return (
          <Personal
            onSubmit={onSubmit}
            previousStep={previousStep}
            step={step}
            setTitle={setTitle}
            formData={formData}
            setFormData={setFormData}
            updateFields={updateFields}
          />
        );
    }
  }, [step]);

  return (
    <Step step={step} title={title}>
      {renderStep()}
    </Step>
  );
};

export default SignUp;
