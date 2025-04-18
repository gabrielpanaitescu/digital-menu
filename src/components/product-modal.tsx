import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle
} from '@/components/ui/credenza'
import { Product } from '@/data/menuData'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import QuantityInputBasic from './ui/quantity-input-basic'
import Price from './price'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { XCircleIcon } from 'lucide-react'
import { useAvailabilityToggle } from '@/hooks/use-menu'
import { useCart } from '@/hooks/use-cart'
import { useOpenCart } from '@/hooks/use-cart'

interface Props {
  product: Product
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductModal = ({ product, open, setOpen }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const [finalPrice, setFinalPrice] = useState(product.price)
  const toggleAvailability = useAvailabilityToggle()
  const { addToCart, cartItems } = useCart()
  const [_, setOpenCart] = useOpenCart()

  useEffect(() => {
    if (open === true) {
      setQuantity(1)
      setFinalPrice(product.price)
    }
  }, [open])

  const handleToggleAvailability = (id: string) => {
    toggleAvailability(id)
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity)
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity)
    setOpenCart(true)
  }

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaContent>
        <CredenzaHeader className="flex flex-col items-center">
          <img
            src={product.imagePath}
            alt={product.name}
            className="w-64 rounded-xl mb-1"
          />
          <div className="flex gap-x-2">
            <CredenzaTitle>{product.name}</CredenzaTitle>
            <Price value={product.price} />
          </div>
          <CredenzaDescription className="font-semibold text-[0.95rem]">
            {product.description}
          </CredenzaDescription>
        </CredenzaHeader>

        <CredenzaBody className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <Switch
              checked={product.available}
              onCheckedChange={() => handleToggleAvailability(product.id)}
            />
            <Label className="text-[1rem]">Available</Label>
          </div>
          <div>
            {product.available ? (
              <QuantityInputBasic
                quantity={quantity}
                onChange={handleQuantityChange}
              />
            ) : (
              <p className="font-medium leading-none text-center text-red-600">
                Sorry, this item is not available at the moment.
              </p>
            )}
          </div>
        </CredenzaBody>
        <CredenzaFooter className="flex flex-row mt-2">
          <CredenzaClose asChild>
            <Button size="lg" className="flex-1 text-md">
              Cancel
            </Button>
          </CredenzaClose>
          <CredenzaClose asChild>
            {product.available ? (
              <Button
                size="lg"
                className={'bg-green-700 hover:bg-green-600 flex-1 text-md'}
                onClick={handleAddToCart}
              >
                <ShoppingCartIcon /> ${(finalPrice * quantity).toFixed(2)}
              </Button>
            ) : (
              <Button
                size="lg"
                disabled
                className={'bg-red-500 flex-1 text-md'}
              >
                <XCircleIcon /> N/A
              </Button>
            )}
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}

export default ProductModal
