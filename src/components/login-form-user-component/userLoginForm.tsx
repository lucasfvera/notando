import React, { useState, useContext } from "react";
import "./userLoginForm.css";
import { UserContext } from "../index";

interface User {
  name: string;
  password: string;
}

export const UserLoginForm = () => {
  const [user,setUser] = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [userpassword, setUserpassword] = useState<string>("");

  const handleSubmit: (val: React.FormEvent) => void = (event) => {
    event.preventDefault();
    const obj: User = { name: username, password: userpassword };
    console.log(obj);
    setUser({name: obj.name,email:'',isLogged: true})
    setUsername("");
    setUserpassword("");
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handlePasswordChange: (
    val: React.ChangeEvent<HTMLInputElement>
  ) => void = (e) => setUserpassword(e.target.value);

  return (
    <>
      <form className="user-login-form-container" onSubmit={(e) => handleSubmit(e)}>
        <label className='user-login-form-label' htmlFor="username">Usuario</label>
        <input
        className="user-login-form-input"
          id="username"
          type="text"
          value={username}
          required
          onChange={(e) => handleUsernameChange(e)}
        />
        <label className='user-login-form-label' htmlFor="password">Contraseña</label>
        <input
        className="user-login-form-input"
          id="password"
          type="password"
          value={userpassword}
          required
          onChange={(e) => handlePasswordChange(e)}
        />
        <button className='user-login-form-btn' type="submit">Entrar</button>
      </form>
    </>
  );
};
