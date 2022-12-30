import * as S from './Step.style'

interface StepConfig {
  children?: any;
  step?: Number | any;
  title?: String
}

const Step = ({ children, step, title }: StepConfig) => {
  return (
    <S.StepWrapper>
      <S.StepperWrapper>
        <S.StepperNumber>{step}</S.StepperNumber>
        <S.StepperTitle>{title}</S.StepperTitle>
      </S.StepperWrapper>
      {children}
    </S.StepWrapper>
  );
};

export default Step;