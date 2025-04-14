import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger
} from '@/components/ui/credenza'
import { Product } from '@/data/menuData'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import QuantityInputBasic from './commerce-ui/quantity-input-basic'
import Price from './price'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { XCircleIcon } from 'lucide-react'

type PropTypes = {
  product: Product
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductModal = ({ product, open, setOpen }: PropTypes) => {
  const [quantity, setQuantity] = useState(1)
  const [finalPrice, setFinalPrice] = useState(product.price)

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity)
  }

  useEffect(() => {
    if (open === true) {
      setQuantity(1)
      setFinalPrice(product.price)
    }
  }, [open])

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
          <CredenzaDescription className="font-semibold">
            {product.description}
          </CredenzaDescription>
        </CredenzaHeader>

        <CredenzaBody className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Toggle item availability</Label>
          </div>
          <div>
            {product.available ? (
              <QuantityInputBasic
                quantity={quantity}
                onChange={handleQuantityChange}
              />
            ) : (
              <p className="text-sm font-medium leading-none text-center">
                Sorry, this item is not available at the moment.
              </p>
            )}
          </div>
        </CredenzaBody>
        <CredenzaFooter className="flex flex-row">
          <CredenzaClose asChild>
            <Button className="flex-1">Close</Button>
          </CredenzaClose>
          <CredenzaClose asChild>
            {product.available ? (
              <Button className={'bg-green-700 hover:bg-green-600 flex-1'}>
                <ShoppingCartIcon /> ${(finalPrice * quantity).toFixed(2)}
              </Button>
            ) : (
              <Button disabled className={'bg-red-500 flex-1'}>
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
