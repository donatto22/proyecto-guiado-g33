import { Navigate, Outlet } from 'react-router-dom'

const ProductsOutlet = () => {
    const logeado = localStorage.getItem('user') ? true : false

    return (
        logeado ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProductsOutlet