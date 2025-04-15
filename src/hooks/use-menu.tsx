import { useMenuData } from '@/contexts/menu-data-context'
import { Product } from '@/data/menuData'

const useAvailabilityToggle = () => {
  const [data, setData] = useMenuData()

  const toggleAvailability = (id: string) => {
    const targetProduct = data
      .flatMap((category) => category.products)
      .find((product) => product.id === id)

    if (!targetProduct) return null

    const updatedProduct: Product = {
      ...targetProduct,
      available: !targetProduct.available
    }

    const updatedMenuData = data.map((category) => ({
      ...category,
      products: category.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    }))

    if (localStorage.getItem('menuData')) {
      localStorage.setItem('menuData', JSON.stringify(updatedMenuData))
    }

    setData(updatedMenuData)
  }

  return toggleAvailability
}

export { useMenuData, useAvailabilityToggle }
