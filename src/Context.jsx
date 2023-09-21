import React, { createContext, useContext, useState } from 'react'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)
const Context = ({children}) => {
    const [show,setShow] = useState(false)
    const showLink = () =>{
        setShow(!show)
    }
  return (
  <GlobalContext.Provider value={{show,showLink}}>
 {children}
  </GlobalContext.Provider>
  )
}

export default Context
