import { useEffect, useState } from 'react'
import BaseLayout from '../../shared/layout/BaseLayout'
import ProductsCard from './productCard/ProductsCard'
import { HStack } from '@chakra-ui/react'

const Products = () => {
    const API = 'https://dummyjson.com/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(API)
            const data = await response.json()
            setProducts(data.products)
        }

        getProducts()
    }, [])

    return (
        <BaseLayout>
            <header>
                <h1>Bienvenido a mi tienda</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quas exercitationem dicta adipisci soluta neque corrupti doloribus voluptatum sed. Non, sit ea tempore vel minus eveniet eum voluptatum culpa quisquam, eius autem nesciunt ullam numquam quasi blanditiis totam enim amet. Minus aut expedita quod facilis ad, nulla saepe fugit accusantium repudiandae excepturi nobis maxime neque dolorem, iusto hic enim, autem nihil nostrum aliquid doloremque perferendis. Quos tenetur omnis vero! Assumenda eligendi ex praesentium est explicabo? Ipsa saepe sit voluptatum, magni odit modi expedita, excepturi recusandae ex dolorem perferendis pariatur rem illo fugiat. Mollitia animi ut nisi minus sequi quas perferendis?</p>
            </header>

            <HStack flexWrap='wrap' gap='2em'>
                {
                    products?.map(p => <ProductsCard product={p} />)
                }
            </HStack>
        </BaseLayout>
    )
}

export default Products