import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    // Debe tener el mismo nombre que la ruta dinámica
    // si la ruta dice /products/:product, se extrae product
    // si la ruta dice /products/:id, se extrae id
    const { product } = useParams()

    return (
        <div>{product}</div>
    )
}

export default SingleProduct