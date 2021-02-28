import React, {createContext, useState, FunctionComponent} from 'react'

export const LoadingContext = createContext<[boolean,Function]>([true,()=>{}])

export const LoadingContextProvider: FunctionComponent = ({children}) => {
    const [loading, setLoading] = useState(true)

    return (
        <LoadingContext.Provider value={[loading,setLoading]}>
            {children}    
        </LoadingContext.Provider>
        )
}

