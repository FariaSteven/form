import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.700);
`;

export const Input = styled.input`
  border: ${(props) =>
    props.errors ? "1px solid #FF6B6B" : "2px solid rgba(0, 0, 0, 0.479)"};
  box-shadow: ${(props) =>
    props.errors ? "0px 0px 0px 3px #f7c9c9" : ""};
  padding: 10px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.726);
`;

export const InputError = styled.span`
  text-align: center;
  font-weight: 500;
  color: #FF6B6B;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  /* background-color: rgba(0, 0, 0, 0.700);ss */
  padding: 5px 10px;
  border: 2px solid rgba(0, 0, 0, 0.500);
  border-radius: 10px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.500);
`;
