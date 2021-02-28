import React, { useContext } from "react";
import { GoogleBtnLogin, GoogleBtnLogout, UserContext, UserLoginForm } from "../index";
import './loginForm.css'

const LoginForm = ({isNavBar}) => {
  const [user, setUser] = useContext(UserContext);
 
  return (
    <div className={isNavBar?'nav-login-form':'page-login-form'}>
      {user.isLogged ? 
      <>
        <h3>Bienvenido {user.name}</h3>
        <GoogleBtnLogout />
      </> 
      :
      <>
      <h3 className='header-login-form' >Iniciá sesión para empezar</h3>
        <UserLoginForm />
        <GoogleBtnLogin />
      </>

      }
    </div>
  );
};

export { LoginForm };
