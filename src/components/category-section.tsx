import { MenuCategory } from '@/data/menuData'
import ProductCard from './product-card'

type PropTypes = { category: MenuCategory }

const MenuCategorySection = ({ category }: PropTypes) => {
  return (
    <div>
      <h4 className="mb-2 scroll-m-20 text-[1.1rem] font-medium tracking-tight font-mono">
        {category.name.toUpperCase()}
      </h4>
      <div className=" grid gap-y-6 gap-x-8 grid-cols-1 sm:grid-cols-2">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default MenuCategorySection
