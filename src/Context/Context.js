import { createContext, useState } from "react"

const Context = createContext()

const DataContext = ({children}) => {
    const [data, setData] = useState()
    return(
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
}

export {Context, DataContext}