import { Link } from 'react-router-dom'
import './nav.css'
import { Paths } from '../../../router/paths'
import { Button } from '@chakra-ui/react'

const Nav = () => {
    const logeado = localStorage.getItem('user') ? true : false

    return (
        <nav>
            <div id='nav-container'>
                <Link to='/'>
                    <h3>Mi tienda</h3>
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
                        logeado && <Button onClick={() => localStorage.removeItem('user')} size='sm' colorScheme='teal' variant='outline'>Cerrar sesión</Button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav