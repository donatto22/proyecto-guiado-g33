import { Route, Routes } from 'react-router-dom'
import Products from '../pages/products/Products'
import Home from '../pages/home/Home'
import SingleProduct from '../pages/singleProduct/SingleProduct'
import Error404 from '../pages/error404/Error404'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            {/* <Route path='/products' element={<Products />} />
            <Route path='/products/:product' element={<SingleProduct />} /> */}

            <Route path='/products'>
                <Route index element={<Products />} />
                <Route path=':product' element={<SingleProduct />} />
            </Route>

            {/* Hace referencia a todas las rutas que no han sido mencionadas arriba */}
            {/* En otras palabras, cualquiera que no haya sido declarad, osea que no exista */}
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default AppRoutes