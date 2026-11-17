import { Link } from 'react-router-dom'
import './nav.css'
import { Paths } from '../../../router/paths'
import { Button, useDisclosure } from '@chakra-ui/react'
import { useUser } from '../../hooks/useUser'
import { FiShoppingCart } from 'react-icons/fi'
import CartDrawer from '../cartDrawer/CartDrawer'

const Nav = () => {
    const logeado = localStorage.getItem('user') ? true : false
    const { user, logout } = useUser()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <nav>
            <div id='nav-container'>
                <Link to='/'>
                    <h3>Mi tienda - {user?.username}</h3>
                </Link>

                <div id='links'>
                    {/* Evita el comportamiento de recargar la poágina */}
                    {/* Así no perdemos datos al pasarlos entre ellos */}
                    {/* Además, carga la página instantaneamente */}
                    {
                        logeado && <Link to={Paths.products}>Productos</Link>
                    }

                    {
                        !logeado && <Link to={Paths.login}>Login</Link>
                    }

                    {
                        logeado && <Link to={Paths.profile}>Perfil</Link>
                    }

                    {
                        logeado && <Button onClick={onOpen} size='sm' colorScheme='teal' variant='ghost'><FiShoppingCart /></Button>
                    }

                    {
                        logeado && <Button onClick={logout} size='sm' colorScheme='teal' variant='outline'>Cerrar sesión</Button>
                    }

                    <CartDrawer isOpen={isOpen} onClose={onClose} />
                </div>
            </div>
        </nav>
    )
}

export default Nav