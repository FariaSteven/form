 import "./step.css";

interface StepConfig {
  children?: any;
  step?: Number | any;
  title?: String
}

const Step = ({ children, step, title }: StepConfig) => {
  return (
    <div className="stepContainer">
      <div className="stepperContainer">
        <div className="stepperNumber">{step}</div>
        <div className="stepperTitle">{title}</div>
      </div>
      {children}
    </div>
  );
};

export default Step;