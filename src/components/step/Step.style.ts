import styled from "styled-components";

export const StepWrapper = styled.div`
  padding: 40px 600px;

  @media (max-width: 1440px) {
    padding: 40px 400px;
  }

  @media (max-width: 1024px) {
    padding: 40px 180px;
  }

  @media (max-width: 768px) {
    padding: 40px 150px;
  }

  @media (max-width: 425px) {
    padding: 30px;
  }
`;

export const StepperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StepperNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
  color: #00000033;
  font-size: 35px;
  font-weight: 600;
  box-shadow: 0px 4px 10px 1px #00000022;
`;

export const StepperTitle = styled.div`
  font-weight: 600;
  font-size: 2rem;
  color: #00000099;
  font-weight: 100;
`;
