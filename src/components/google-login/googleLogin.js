import React, { useContext } from 'react';
import {GoogleLogin} from 'react-google-login';
import clientId from "../../config/googleClientID";
import { UserContext } from '../index'


const GoogleBtnLogin = ()=>{
  const [user,setUser] = useContext(UserContext);

  function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      setUser({name: profile.getName(), email: profile.getEmail(), isLogged: true });
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      console.log("Todo el obj de usuario: ",googleUser);
    }

    return <GoogleLogin 
    clientId={clientId}
    buttonText={'Entrar con Google'}
    onSuccess={(e)=>onSignIn(e)}
    onFailure={err=>console.log("Sucedió el siguiente error: ",err)}
    cookiePolicy={"single_host_origin"}
    isSignedIn={true}
    />
}

export {GoogleBtnLogin};