import { Product } from '@/data/menuData'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="flex flex-row hover:shadow-xl h-32">
      <div className="flex-1 min-w-0">
        <CardHeader>
          <div className="flex items-center">
            <span
              className={`w-2 h-2 me-1 rounded-full ${
                product.available ? 'bg-green-500 ' : 'bg-red-500'
              }`}
            ></span>
            <CardTitle className="text-sm">{product.name}</CardTitle>
          </div>
          <CardDescription className="truncate text-[0.8em] block">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8em] font-semibold">
            ${product.price.toFixed(2)}
          </code>
        </CardFooter>
      </div>

      <img
        src={product.imagePath}
        className="h-full rounded-sm"
        alt={product.name}
      />
    </Card>
  )
}

export default ProductCard
