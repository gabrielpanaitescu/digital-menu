import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { useCart } from '@/hooks/use-cart'
import { useOpenCart } from '@/hooks/use-cart'
import { Button } from './ui/button'
import { CreditCardIcon } from 'lucide-react'
import CartProduct from './cart-product'

const Cart = () => {
  const [open, setOpen] = useOpenCart()
  const { getCartProducts, getCartTotal } = useCart()

  const cartProducts = getCartProducts()
  const cartTotal = getCartTotal()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col px-3 sm:px-6">
        <SheetHeader>
          <SheetTitle className="border-b pb-1">Your order</SheetTitle>
        </SheetHeader>

        {cartProducts.length > 0 ? (
          <div className="mb-auto space-y-6 overflow-y-auto">
            {cartProducts.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <SheetDescription className="mb-auto ">
            No items in cart
          </SheetDescription>
        )}

        <div className="space-y-2 border-t border-black/20 pt-1">
          <div className="flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">${cartTotal.toFixed(2)}</p>
          </div>
          <Button className={'bg-green-700 hover:bg-green-600 w-full'}>
            <CreditCardIcon /> Confirm
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Cart
