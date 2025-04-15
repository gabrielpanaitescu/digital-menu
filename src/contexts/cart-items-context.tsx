import { createContext, useContext, useEffect, useState } from 'react'

export type CartItem = {
  id: string
  quantity: number
}

type CartItemsContextType = {
  cartItems: CartItem[]
  setCartItems: (cartItems: CartItem[]) => void
}

const CartItemsContext = createContext<CartItemsContextType>({
  cartItems: [],
  setCartItems: () => {}
})

export const useCartItems = () => {
  const state = useContext(CartItemsContext)

  if (!state)
    throw new Error('useCartItems must be used within MenuDataContextProvider')

  return state
}

type PropTypes = {
  children: React.ReactNode
}

export const CartItemsProvider = ({ children }: PropTypes) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const localData = localStorage.getItem('cartItems')

    if (localData) {
      const parsedData = JSON.parse(localData)
      setCartItems(parsedData)
    }
  }, [])

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  )
}
