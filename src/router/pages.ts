import { lazy } from 'react'
import LoaderPage from '../shared/utils/LoaderPage'

export const Pages = {
    Home: LoaderPage(lazy(() => import('../pages/home/Home')), 'Cargando Home...'),
    Products: LoaderPage(lazy(() => import('../pages/products/Products'))),
    Login: LoaderPage(lazy(() => import('../pages/login/Login')))
}