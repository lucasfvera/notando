import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import clientId from "../../config/googleClientID";
import { UserContext } from "../index";
import './googleLogout.css'

const GoogleBtnLogout = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    setUser({ name: "Invitado", email: "", isLogged: false });
    console.log("Sesión terminada exitosamente!");
  };

  return (
    <GoogleLogout
      buttonText={"Salir"}
      clientId={clientId}
      className='google-btn-logout'
      onLogoutSuccess={() => logout()}
    />
  );
};

export { GoogleBtnLogout };
