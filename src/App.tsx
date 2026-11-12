import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './router/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    // Sin este elemento, no podríamos ser capaces de
    // tener múltiples páginas, ni navegar entre ellas 
    <BrowserRouter>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App