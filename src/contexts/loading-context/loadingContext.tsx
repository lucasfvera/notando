import React, {createContext, useState, FunctionComponent} from 'react'

export const LoadingContext = createContext<[boolean,Function]>([true,()=>{}]) //default value when there is not a Provider in the tree

export const LoadingContextProvider: FunctionComponent = ({children}) => {
    const [loading, setLoading] = useState<boolean>(true)

    return (
        <LoadingContext.Provider value={[loading,setLoading]}>
            {children}    
        </LoadingContext.Provider>
        )
}

