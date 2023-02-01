import React, { useCallback, useEffect, useState } from "react";

import Account from "../../components/forms/Account";
import Personal from "../../components/forms/Personal";
import Plans from "../../components/forms/Experience";
import Step from "../../components/step/Step";

import { useMutation, useQuery } from "@apollo/client/react";
import { GET_USERS } from "../../gql/Query";
import { CREATE_USER } from "../../gql/Mutation";

const SignUp = () => {
  const [step, setStep]: Number | any = useState(1);
  const [title, setTitle]: String | any = useState("");

  const { loading, error, data } = useQuery(GET_USERS);
  const [
    createNewUser,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_USER);

  const [languages, setLanguages] = useState();
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

  useEffect(() => {
    setLanguages(formData?.languages);
  }, [languages, formData]);

  const updateFields = useCallback(
    (key: any, value: any) => {
      setFormData((prev: any) => {
        return { ...prev, [key]: value };
      });
    },

    [formData]
  );

  useEffect(() => {
    if (step === 4) {
      createNewUser({
        variables: {
          name: formData?.name,
          celphone: formData?.celphone,
          cpf: formData?.cpf,
          cep: formData?.cep,
          neighborhood: formData?.neighborhood,
          street: formData?.street,
          city: formData?.city,
          email: formData?.email,
          password: formData?.password,
          confirmPassword: formData?.confirmPassword,
          languages: languages,
        },
      });
    }
  }, [step]);

  const onSubmit = (key: any, data: any) => {
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
            // nextStep={nextStep}
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
            // nextStep={nextStep}
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
