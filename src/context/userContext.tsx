import React, { createContext, useState } from "react";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const DEFAULT_VALUE = {
  state: {
    name: "",
    celphone: "",
    cpf: "",
    cep: "",
    neighborhood: "",
    street: "",
    city: "",
  },
  setState: () => {},
}

const UserContext = createContext<any>(null);

const UserContextProvider = (props: ContainerProps) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <UserContext.Provider value={{state, setState}}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;