import React, {useContext} from 'react'
import {UserContext, LoginForm, Home} from '../index'
import "../../App.css";


export const Body: React.FunctionComponent = ()=>{
    const [user, setUser] = useContext(UserContext);

    return(
        <div className="appContainer">
            {/* <button onClick={()=>console.log('user',user)} >Log</button> */}
            <div className="headerContainer">
                <h1 className="header-text primary-text-color">Notando</h1>
                <h4 className="subheader-text primary-text-color">
                Crea notas y mantené al día tus listas
                </h4>
            </div>
            {
                user.isLogged?
                <Home/>:
                <LoginForm />
            }
        </div>
    )
}