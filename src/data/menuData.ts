export interface Product {
  id: string
  name: string
  description: string
  price: number
  available: boolean
  imagePath: string
}

export interface MenuCategory {
  id: string
  name: string
  products: Product[]
}

export const menuData: MenuCategory[] = [
  {
    id: '4f2c93a5-1cb7-4b3a-9819-fb43a17e1fc7',
    name: 'Pizza',
    products: [
      {
        id: 'd3c2b1f0-512a-4f0b-bcc3-0a8cfc43b241',
        name: 'Margherita',
        description: 'Classic pizza with tomato sauce, mozzarella, and basil',
        price: 8.99,
        available: true,
        imagePath: '/menuItems/pizza-margherita.jpg'
      },
      {
        id: '1be48f7f-1052-42dc-80b7-607ba8a34a7a',
        name: 'Pepperoni',
        description: 'Tomato sauce, mozzarella, and pepperoni',
        price: 10.99,
        available: false,
        imagePath: '/menuItems/pizza-pepperoni.jpg'
      }
    ]
  },
  {
    id: 'e48fc123-4c7d-4a8d-b0d4-1a5439f3fc2f',
    name: 'Burgers',
    products: [
      {
        id: 'c104a4e0-c76f-4040-9ec9-0fc68c31f7ec',
        name: 'Beef Classic',
        description: 'Beef patty, lettuce, tomato, onion, and cheese',
        price: 7.5,
        available: true,
        imagePath: '/menuItems/burger-beef.jpg'
      },
      {
        id: 'eb9bda67-2f1b-4a8e-b45a-58b8362f25ed',
        name: 'Veggie',
        description: 'Grilled veggie patty, avocado, tomato, and vegan mayo',
        price: 6.75,
        available: true,
        imagePath: '/menuItems/burger-veggie.jpg'
      }
    ]
  },
  {
    id: '5f42a9e7-e98a-4727-9f3a-0c86b4d6c02b',
    name: 'Drinks',
    products: [
      {
        id: '7e20f2e4-9b88-4a01-9932-e15a7cf5d4e0',
        name: 'Coca-Cola',
        description: 'Chilled 330ml can',
        price: 1.5,
        available: true,
        imagePath: '/menuItems/drink-cola.jpg'
      },
      {
        id: '39f3ae77-0a70-4c7b-8d8d-cf84c2e5f08d',
        name: 'Lemonade',
        description: 'Fresh homemade lemonade with mint',
        price: 2.0,
        available: true,
        imagePath: '/menuItems/drink-lemonade.jpg'
      }
    ]
  }
]
