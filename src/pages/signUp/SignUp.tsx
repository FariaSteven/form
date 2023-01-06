import React, { useState } from "react";
import Account from "../../components/forms/Account";
import Personal from "../../components/forms/Personal";
import Plans from "../../components/forms/Plans";
import Step from "../../components/step/Step";

const SignUp = () => {
  const [step, setStep]: Number | any = useState(3);
  const [title, setTitle]: String | any = useState("");

  const onSubmit = (data: any) => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 2:
        return (
          <Account
            onSubmit={onSubmit}
            previousStep={previousStep}
            step={step}
            setTitle={setTitle}
          />
        );

      case 3:
        return (
          <Plans
            onSubmit={onSubmit}
            previousStep={previousStep}
            step={step}
            setTitle={setTitle}
          />
        );

      default:
        return (
          <Personal
            onSubmit={onSubmit}
            previousStep={previousStep}
            step={step}
            setTitle={setTitle}
          />
        );
    }
  };

  return (
    <Step step={step} title={title}>
      {renderStep()}
    </Step>
  );
};

export default SignUp;
