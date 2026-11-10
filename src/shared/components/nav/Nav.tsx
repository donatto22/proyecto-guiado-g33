import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
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
                    <Link to='/products'>Productos</Link>
                    <a href="">Perfil</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav