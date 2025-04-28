import Cart from '@/components/cart'
import MenuCategorySection from '@/components/category-section'
import Header from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { useMenuData } from '@/contexts/menu-data-context'

import { useState } from 'react'
import { Toaster } from '@/components/ui/toaster'
import MenuBar from '@/components/menu-bar'

const Menu = () => {
  const [data] = useMenuData()
  const [categorySelect, setCategorySelect] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceSort, setPriceSort] = useState('')

  let dataToRender = data

  if (categorySelect !== 'All')
    dataToRender = dataToRender.filter(
      (category) => category.name === categorySelect
    )

  if (searchQuery) {
    dataToRender = dataToRender.map((category) => ({
      ...category,
      products: category.products.filter((product) =>
        product.name.toUpperCase().includes(searchQuery.toUpperCase())
      )
    }))
  }

  if (priceSort) {
    dataToRender = dataToRender.map((category) => ({
      ...category,
      products: category.products.sort((productA, productB) => {
        return priceSort === 'priceAsc'
          ? productA.price - productB.price
          : productB.price - productA.price
      })
    }))
  }

  return (
    <div className="">
      <Cart />
      <Header />
      <Toaster />
      <MenuBar
        data={data}
        categorySelect={categorySelect}
        setCategorySelect={setCategorySelect}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
      />
      <div className="mt-4 container mx-auto px-4 sm:px-8 lg:px-14">
        {dataToRender.map((category, index) => {
          return (
            // category.products.length > 0 && // do not show category at all if no products match the search query
            <div key={category.id}>
              {index > 0 && <Separator className="my-9" />}
              <MenuCategorySection category={category} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
