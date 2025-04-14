import { createContext, useContext, useReducer, useState } from 'react'

type OpenCartContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

const OpenCartContext = createContext<null | OpenCartContextType>(null)

export const useOpenCart = () => {
  const context = useContext(OpenCartContext)
  if (!context)
    throw new Error('useOpenCart must be used within OpenCartContextProvider')

  return context
}

type PropTypes = {
  children: React.ReactNode
}

export const OpenCartContextProvider = ({ children }: PropTypes) => {
  const [open, setOpenDispatch] = useState(false)

  return (
    <OpenCartContext.Provider value={[open, setOpenDispatch]}>
      {children}
    </OpenCartContext.Provider>
  )
}
