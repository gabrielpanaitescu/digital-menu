import { Product } from '@/data/menuData'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import ProductModal from './product-modal'
import Price from './price'
import { useState } from 'react'

type PropTypes = {
  product: Product
}

const ProductCard = ({ product }: PropTypes) => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  return (
    <>
      <ProductModal
        product={product}
        open={open}
        setOpen={setOpen}
      ></ProductModal>
      <Card
        className="flex flex-row hover:shadow-xl h-32 min-w-[264px]"
        onClick={handleOpenModal}
      >
        <div className="flex-1 min-w-0">
          <CardHeader>
            <div className="flex items-center">
              <span
                className={`w-2 h-2 me-1 rounded-full ${
                  product.available ? 'bg-green-500 ' : 'bg-red-500'
                }`}
              ></span>
              <CardTitle>{product.name}</CardTitle>
            </div>
            <CardDescription className="truncate block">
              {product.description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Price value={product.price} />
          </CardFooter>
        </div>
        <img
          src={product.imagePath}
          className="h-full rounded-r-xl"
          alt={product.name}
        />
      </Card>
    </>
  )
}

export default ProductCard
