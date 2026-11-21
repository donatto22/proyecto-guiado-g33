import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../pages/error404/Error404'
import ProductsOutlet from './outlets/ProductsOutlet'
import SingleProduct from '../pages/singleProduct/SingleProduct'
import { Paths } from './paths'
import { Pages } from './pages'

const { Home, Login, Products } = Pages

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path={Paths.login} element={<Login />} />

                <Route path={Paths.products} element={<ProductsOutlet />}>
                    <Route index element={<Products />} />
                    <Route path=':id' element={<SingleProduct />} />
                </Route>

                {/* Hace referencia a todas las rutas que no han sido mencionadas arriba */}
                {/* En otras palabras, cualquiera que no haya sido declarad, osea que no exista */}
                <Route path='*' element={<Error404 />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes