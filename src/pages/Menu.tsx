import MenuCategorySection from '@/components/category-section'
import Header from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { menuData } from '@/data/menuData'

const Menu = () => {
  return (
    <>
      <Header />
      <h2 className="border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mt-24 pt-2 sticky top-12 bg-white z-40 container mx-auto px-4 sm:px-6">
        Menu
      </h2>
      <div className="mt-4 container mx-auto px-4 sm:px-8 lg:px-14">
        {menuData.map((category, index) => {
          return (
            <div key={category.id}>
              {index > 0 && <Separator className="my-10" />}
              <MenuCategorySection category={category} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Menu
