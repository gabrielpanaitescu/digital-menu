import { createContext, useContext, useState } from 'react'

type OpenCartContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

const OpenCartContext = createContext<null | OpenCartContextType>(null)

export const useOpenCart = () => {
  const state = useContext(OpenCartContext)
  if (!state)
    throw new Error('useOpenCart must be used within OpenCartContextProvider')

  return state
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
