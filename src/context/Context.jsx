import React, {createContext} from 'react'

export const Ctx = createContext()

const Context = ({children}) => {
  return (
    <Ctx.Provider
    value={{
        color: 'blue',
        texto:'soy un texto dentro del contexto'
    }}>
        {children}
    </Ctx.Provider>
  )
}

export default Context