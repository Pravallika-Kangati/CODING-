import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

export default props => {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      age:0,
      gender:'',
      birthdate: new Date().toISOString().slice(0, 10),
      bio: "",
      acceptTerms: false,
      newsletter: false
    },
    errors: {}
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};