import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #a2a2a2;
`;

export const Input = styled.input`
  /* background-color: #FFFCF9; */
  border: ${(props) =>
    props.errors ? "1px solid #FF6B6B" : "1px solid #00000011"}; 
  box-shadow: ${(props) =>
    props.errors ? "0px 0px 0px 3px #f7c9c9" : "0px 4px 10px 1px #00000022"};
  padding: 15px;
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
  visibility: ${(props) => props.visible ? "hidden" : "visible"};
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 1.3rem;
  color: #00000066;
  box-shadow: 0px 4px 10px 1px #00000022;
`;
