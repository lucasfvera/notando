import React, {useContext} from 'react'
import {GoogleBtnLogin} from '../index'
import {GoogleBtnLogout} from '../index'
import { UserContext } from "../user-context/userContext";

const LoginForm = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <h3>Bienvenido {user.name}</h3>
            {
                user.isLogged?
                <GoogleBtnLogout/>:
                <GoogleBtnLogin />
            }
        </div>
    )
}

export  {LoginForm}
