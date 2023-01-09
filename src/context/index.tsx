import React from "react";

import { UserContextProvider } from "./userContext";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const GlobalContext = (props: ContainerProps) => {
  return (
      <UserContextProvider>{props.children}</UserContextProvider>
  );
};

export default GlobalContext;
