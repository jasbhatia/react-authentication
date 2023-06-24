import { useState } from "react";
import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  let [token, setToken] = useState("");
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
