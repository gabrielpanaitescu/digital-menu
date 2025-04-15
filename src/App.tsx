import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import { MenuDataContextProvider } from './contexts/menu-data-context'
import { OpenCartContextProvider } from './contexts/open-cart-context'
import { CartItemsProvider } from './contexts/cart-items-context'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/menu"
        element={
          <CartItemsProvider>
            <OpenCartContextProvider>
              <MenuDataContextProvider>
                <Menu />
              </MenuDataContextProvider>
            </OpenCartContextProvider>
          </CartItemsProvider>
        }
      />
    </Routes>
  )
}

export default App
