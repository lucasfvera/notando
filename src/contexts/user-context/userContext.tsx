import React, {createContext, useState, FunctionComponent, ContextType} from 'react';

type User = { 
    name: string;
    email: string;
    isLogged: boolean;
    type: "guest" | "authenticated" | "admin"
}

const anonUser : User = {
    name: "Invitado",
    email: "",
    isLogged: false,
    type: "guest"
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
