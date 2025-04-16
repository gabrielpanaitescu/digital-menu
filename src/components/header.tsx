import { Button } from '@/components/ui/button'
import { useMediaQuery } from '@uidotdev/usehooks'
import { HandPlatter } from 'lucide-react'
import { useCart, useOpenCart } from '@/hooks/use-cart'

const Header = () => {
  const [_, setOpen] = useOpenCart()
  const { getCartTotal } = useCart()

  const cartTotal = getCartTotal().toFixed(2)

  const handleOpenCart = () => {
    setOpen(true)
  }

  const isXSDevice = useMediaQuery('only screen and (max-width: 335px)')
  return (
    <div className="fixed top-0 inset-x-0 border shadow-sm flex justify-between items-center py-2 px-2 sm:px-14 bg-white z-50 text-nowrap">
      {isXSDevice ? (
        <h3 className="text-xl font-semibold tracking-tight font-mono">
          🍔<span className="px-0.5">||</span>🍕
        </h3>
      ) : (
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight font-mono whitespace-nowrap">
          st<span className="text-[0.80em]">🍔</span>cked
          <span className="px-2">||</span>slic
          <span className="text-[0.80em] ">🍕</span>d
        </h3>
      )}
      <Button onClick={handleOpenCart} className="text-md px-2.5 sm:p-4">
        <HandPlatter style={{ width: '18px', height: '18px' }} />${cartTotal}
      </Button>
    </div>
  )
}

export default Header
