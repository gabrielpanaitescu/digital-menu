import { useCartItems } from '@/contexts/cart-items-context'
import { useMenuData } from '@/hooks/use-menu'

export type CartProductType = {
  quantity: number
  id: string
  name: string
  description: string
  price: number
  available: boolean
  imagePath: string
}

const useCart = () => {
  const { cartItems, setCartItems } = useCartItems()
  const [menuData] = useMenuData()

  const addToCart = (id: string, quantity: number) => {
    const currentCartItems = [...cartItems]

    const foundItem = currentCartItems.find((item) => item.id === id)
    if (foundItem) {
      const newQuantity = foundItem.quantity + quantity
      if (newQuantity <= 99) {
        foundItem.quantity = newQuantity
      } else {
        foundItem.quantity = 99
      }
      return
    }

    setCartItems([...currentCartItems, { id, quantity }])
  }

  const removeItem = (id: string) => {
    const foundItem = cartItems.find((item) => item.id === id)
    if (!foundItem) throw new Error('Item not in cart')

    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateItem = (id: string, quantity: number) => {
    const currentCartItems = [...cartItems]

    const foundItem = currentCartItems.find((item) => item.id === id)
    if (!foundItem) throw new Error('Item not in cart')

    const updatedItem = { ...foundItem, quantity }

    setCartItems(cartItems.map((item) => (item.id === id ? updatedItem : item)))
  }

  const getCartProducts = (): CartProductType[] => {
    const productsInCart = menuData
      .flatMap((category) => category.products)
      .filter((product) => cartItems.some((item) => item.id === product.id))
      .map((product) => ({
        ...product,
        quantity:
          cartItems.find((item) => item.id === product.id)?.quantity || 1
      }))

    return productsInCart
  }

  const getCartTotal = () => {
    if (cartItems.length === 0) return 0
    return getCartProducts().reduce((accum, currValue) => {
      return currValue.price * currValue.quantity + accum
    }, 0)
  }

  return {
    cartItems,
    addToCart,
    removeItem,
    updateItem,
    getCartProducts,
    getCartTotal
  }
}

export { useCart }
export { useOpenCart } from '@/contexts/open-cart-context'
