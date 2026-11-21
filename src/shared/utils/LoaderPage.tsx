import { Suspense, type ComponentType } from 'react'
import LoaderRoute from '../components/loaderRoute/LoaderRoute'

const LoaderPage = <P extends object>(Component: ComponentType, loaderText: string = "Cargando...") => {
    const Envoltura = (props: P) => {
        return (
            <Suspense fallback={<LoaderRoute text={loaderText} />}>
                <Component {...props} />
            </Suspense>
        )
    }

    return Envoltura
}

export default LoaderPage