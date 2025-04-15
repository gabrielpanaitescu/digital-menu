# 🍽️ Digital Menu - Expressoft

## 🍔🍕 'stacked || sliced'

- Brand designed as a burger and pizza place, with a little bit of a programming theme

## Start

- npm install
- npm run dev

## Intro

- Fully responsive on all devices, supporting screen sizes as low as 300px
- Dynamic product details displayed as modals for medium screen and drawers for smaller screen
- This website is designed to be used from a mobile phone, tablet or PC by:
  - Customers as 'clients' in order to view the menu and order
  - Staff as 'admins' (default on local state implicitly) in order to make modifications (ex: change menu availability).
- This is just a demo, separate front-end versions could be created for in-restaurant tablets or POS solutions, connected to the same API

### Notes

- Currently, all 5 core tasks completed. Bonus: Responsive layout and Modal view
- localStorage is used to simulate persistent data upon page refresh (ex: cart items) and updates (ex: availability toggling)
- OpenCartContext, MenuDataContext and CartItemsContext were implemented to avoid prop drilling
- useCart custom hook created to handle local state management for cart
- useAvailabilityToggle custom hook created to handle availability toggling

### Further to dos / improvements

- Disable checkout button if items have been disabled after adding them to cart
- Search and Sort
- Minimize rerenders
- Fix linting errors
- Add component unit tests
- Buttons directly on cards for interacting with the cart

#### Credits + Tech Stack upgrades 🚀

- Added [shadcn/ui](https://ui.shadcn.com/) components to go along the recommended tech stack
- [useMediaQuery](https://usehooks.com/usemediaquery) hook is used to change the Carousel orientation to horizontal on screens < sm (640px), and other necessary adjustments that couldn't be made with tailwind breakpoints
- Custom shadcn modal/drawer made by [credenza](https://github.com/redpangilinan/credenza)
- Static assets (menu item images) are handled via public dir as per Vite docs https://vite.dev/guide/assets
  - compressed using: https://compressimage.io/
  - cola: https://www.pexels.com/photo/can-of-coca-cola-24860316/
  - lemonade: https://www.pexels.com/photo/glass-with-fresh-cold-lemonade-8679581/
  - food created with AI tool: https://www.recraft.ai/
