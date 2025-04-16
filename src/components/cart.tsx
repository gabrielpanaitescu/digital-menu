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
import { CircleAlertIcon } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Cart = () => {
  const [open, setOpen] = useOpenCart()
  const { clearCart, getCartProducts, getCartTotal } = useCart()
  const { toast } = useToast()

  const cartProducts = getCartProducts()
  const cartTotal = getCartTotal()

  // hardcoded estimated time to prepare the order in minutes
  const eta = 30

  const handleOrder = () => {
    setOpen(false)
    clearCart()
    toast({
      title: '🎉 Order placed!🤤',
      description: `Ready at ~${new Date(Date.now() + eta * 60000)
        .toTimeString()
        .slice(0, 5)}`,
      duration: 5000
    })
  }

  const hasUnavailableProduct = cartProducts.some(
    (product) => !product.available
  )

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col px-3 sm:px-6 text-lg">
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
          <SheetDescription className="mb-auto">
            No items in cart
          </SheetDescription>
        )}

        {hasUnavailableProduct && (
          <SheetDescription className="font-bold text-black/75">
            <CircleAlertIcon
              className="inline-block mr-1"
              color="red"
              style={{ opacity: '0.65' }}
            />
            Sorry, it seems some items became unavailable since you've added
            them to cart. Please remove the items marked with red in order to
            continue
          </SheetDescription>
        )}

        <div
          className={`space-y-2 border-t border-black/20 pt-1 ${
            hasUnavailableProduct ? 'font-thin' : 'font-semibold'
          }`}
        >
          <div className="flex justify-between">
            <p>Total</p>
            <p>${cartTotal.toFixed(2)}</p>
          </div>
          <Button
            onClick={handleOrder}
            disabled={hasUnavailableProduct || cartProducts.length === 0}
            size="lg"
            className={
              'text-[1rem] font-semibold bg-green-700 hover:bg-green-600 w-full'
            }
          >
            <CreditCardIcon style={{ width: '20px', height: '20px' }} /> Confirm
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Cart
