import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './router/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './shared/context/UserContext'

const App = () => {
  return (
    // Sin este elemento, no podríamos ser capaces de
    // tener múltiples páginas, ni navegar entre ellas 
    <BrowserRouter>
      <ChakraProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App