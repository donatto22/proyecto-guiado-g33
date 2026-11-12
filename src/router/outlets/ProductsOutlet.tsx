import { Navigate, Outlet } from 'react-router-dom'

const ProductsOutlet = () => {
    const logeado = true

    return (
        logeado ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProductsOutlet