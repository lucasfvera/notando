import React, { useContext } from "react";

// feature flags
import { FeatureController } from '../index'

// my components
import { GoogleBtnLogin, GoogleBtnLogout, UserContext, UserLoginForm } from "../index";

// styles
import './loginForm.css'

interface LoginFormProps{
  isNavBar: boolean
}


const LoginForm = ({isNavBar}: LoginFormProps) => {
  const [user, setUser] = useContext(UserContext);
  // const [decision] = useDecision('test-flags');
  // console.log("debug - testFlag",decision)
 
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
        {/* {decision && decision.enabled ? <div>Habilitado</div> : <div>No está la feature</div>} */}
        <FeatureController name="formLogin" fallback={<p></p>}>
          <UserLoginForm />
        </FeatureController>
        <GoogleBtnLogin />
      </>

      }
    </div>
  );
};

export { LoginForm };
