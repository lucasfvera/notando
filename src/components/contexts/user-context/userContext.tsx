import React, {createContext, useState, FunctionComponent, ContextType} from 'react';

type User = { 
    name: string;
    email: string;
    isLogged: boolean;
}

const anonUser : User = {
    name: "Invitado",
    email: "",
    isLogged: false
}

export const UserContext = createContext<[User,Function]>([anonUser,()=>{}]); //add a default value when no provider is in the tree

export const UserContextProvider: FunctionComponent<FunctionComponent> = ({children})=>{
    const [user, setUser] = useState(anonUser)


    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>

    );
}
