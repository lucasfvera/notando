import React, { useContext } from "react";
import { FeatureController, FeatureToggle ,UserContext, LoginForm, Home } from "../index";
import "../../App.css";

export const Body: React.FunctionComponent = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="appContainer">
      <FeatureController name='test'>
        <div style={{position: 'absolute',bottom: 0,right: 0 ,zIndex: 9, backgroundColor: 'whitesmoke',padding: '8px',margin: '4px',borderRadius: '4px'}}>Test feature flags
        <FeatureToggle />
        </div>
      </FeatureController>
      {user.isLogged ? (
        <>
          <div className="headerContainer">
            <div style={{ flex: 1 }}>
              <h1 className="header-text primary-text-color">Notando</h1>
              <h4 className="subheader-text primary-text-color">
                Crea notas y mantené al día tus listas
              </h4>
            </div>
            <LoginForm isNavBar/>
          </div>
        </>
      ) : null}
      {user.isLogged ? <Home /> : <LoginForm isNavBar={false} />}
    </div>
  );
};
