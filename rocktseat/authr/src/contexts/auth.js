import React, { createContext, useState } from "react";

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
  const [signIn, setSignIn] = useState();

  const context = {
    signIn,
    setSignIn,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
