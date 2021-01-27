import React, {useContext} from 'react'
import {GoogleBtnLogin,GoogleBtnLogout,UserContext} from '../index'

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
