import { createContext, useContext, useEffect, useState } from 'react'
import { MenuCategory, menuData } from '@/data/menuData'

type MenuDataContextType = [
  MenuCategory[],
  React.Dispatch<React.SetStateAction<MenuCategory[]>>
]

const MenuDataContext = createContext<null | MenuDataContextType>(null)

export const useMenuData = () => {
  const state = useContext(MenuDataContext)
  if (!state)
    throw new Error('useMenuData must be used within MenuDataContextProvider')

  return state
}

type PropTypes = {
  children: React.ReactNode
}

export const MenuDataContextProvider = ({ children }: PropTypes) => {
  const [data, setData] = useState<MenuCategory[]>(menuData)

  useEffect(() => {
    const localData = localStorage.getItem('menuData')

    if (localData) {
      const parsedData = JSON.parse(localData)
      setData(parsedData)
    } else {
      localStorage.setItem('menuData', JSON.stringify(menuData))
    }
  }, [])

  return (
    <MenuDataContext.Provider value={[data, setData]}>
      {children}
    </MenuDataContext.Provider>
  )
}
