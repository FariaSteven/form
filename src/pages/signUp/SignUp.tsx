import React, { useCallback, useState, useContext, useEffect } from "react";
import UserContext from "../../context/userContext";

import Account from "../../components/forms/Account";
import Personal from "../../components/forms/Personal";
import Plans from "../../components/forms/Experience";
import Step from "../../components/step/Step";


const SignUp = () => {
  const [step, setStep]: Number | any = useState(1);
  const [title, setTitle]: String | any = useState("");

  const { setState: setGlobalState } = useContext(UserContext);

  const onSubmit = (data: any) => {
    setGlobalState(data)
    setStep(step + 1);
    console.log("data", data);
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
  }, [step]);

  return (
    <Step step={step} title={title}>
      {renderStep()}
    </Step>
  );
};

export default SignUp;
