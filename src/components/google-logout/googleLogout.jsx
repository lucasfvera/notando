import React, { useContext } from 'react'
import { GoogleLogout } from "react-google-login";
import clientId from "../../config/googleClientID";
import { UserContext } from '../index'

const GoogleBtnLogout = () => {
    const [user, setUser] = useContext(UserContext)


    const logout = ()=>{
        setUser({name:"Invitado",email:'',isLogged: false})
        console.log("Sesión terminada exitosamente!")
    }
    
    return (
        <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={()=>logout()}
        />
            
    )
}

export {GoogleBtnLogout}
