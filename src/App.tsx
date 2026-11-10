import AppRoutes from './router/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    // Sin este elemento, no podríamos ser capaces de
    // tener múltiples páginas, ni navegar entre ellas 
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App