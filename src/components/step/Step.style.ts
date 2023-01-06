import styled from "styled-components";

export const StepWrapper = styled.div`
  padding: 10px 20px;
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
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 100px;
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const StepperTitle = styled.div`
  /* background-color: #f0f8ff;
      padding: 5px 8px;
      border: 1px solid #a4d4ff;
      border-radius: 10px; 
  */
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  font-weight: 100;
`;
