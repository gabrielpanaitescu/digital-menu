import Cart from '@/components/cart'
import MenuCategorySection from '@/components/category-section'
import Header from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { useMenuData } from '@/contexts/menu-data-context'
import MenuBar from '@/components/menu-bar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState } from 'react'

const Menu = () => {
  const [data] = useMenuData()
  const [categorySelect, setCategorySelect] = useState<null | string>('All')

  const categoryList = data.map((category) => category.name)

  const selectedCategory =
    categorySelect === 'All'
      ? data
      : data.filter((category) => category.name === categorySelect)

  console.log('categorySelect', categorySelect)
  console.log('selectedCategory', selectedCategory)

  return (
    <>
      <Cart />
      <Header />
      <div className="gap-x-2 pb-2 pt-2 sticky top-12 bg-white z-40 container mx-auto px-4 mt-24 sm:px-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold tracking-tight first:mt-0">
            Menu
          </h2>
          <Select onValueChange={setCategorySelect}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              {categoryList.map((category, index) => (
                <SelectItem value={category} key={category + index}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Separator />
      </div>
      <div className="mt-4 container mx-auto px-4 sm:px-8 lg:px-14">
        {selectedCategory.map((category, index) => {
          return (
            <div key={category.id}>
              {index > 0 && <Separator className="my-9" />}
              <MenuCategorySection category={category} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Menu
