import { CartProductType, useCart } from '@/hooks/use-cart'
import { Button } from './ui/button'
import QuantityInputBasic from './ui/quantity-input-basic'
import { useEffect, useState } from 'react'

type PropTypes = {
  product: CartProductType
}

const CartProduct = ({ product }: PropTypes) => {
  const [quantity, setQuantity] = useState(product.quantity)

  const { updateItem, removeItem } = useCart()

  useEffect(() => {
    updateItem(product.id, quantity)
  }, [quantity])

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity)
  }

  const handleRemoveItem = () => {
    removeItem(product.id)
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b">
        <div className="flex">
          <p>{product.quantity}x</p>
          <p className="ml-1.5">{product.name}</p>
        </div>
        <p>${(product.price * (product.quantity ?? 1)).toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <Button
          size="sm"
          className="bg-gray-200 text-black p-2 hover:text-white"
          onClick={handleRemoveItem}
        >
          Remove
        </Button>
        <QuantityInputBasic
          className="text-sm text-gray-700"
          quantity={quantity}
          onChange={handleQuantityChange}
        />
      </div>
    </div>
  )
}

export default CartProduct
