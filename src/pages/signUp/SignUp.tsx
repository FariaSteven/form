import React, { useCallback, useEffect, useState } from "react";

import Account from "../../components/forms/Account";
import Personal from "../../components/forms/Personal";
import Plans from "../../components/forms/Experience";
import Step from "../../components/step/Step";

const SignUp = () => {
  const [step, setStep]: Number | any = useState(3);
  const [title, setTitle]: String | any = useState("");

  const [formData, setFormData]: any = useState({
    name: "",
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
