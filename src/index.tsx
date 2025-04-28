import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './components/theme-provider'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
