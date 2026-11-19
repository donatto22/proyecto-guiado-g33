import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { DummyProduct } from '../../modules/dummyProduct'
import BaseLayout from '../../shared/layout/BaseLayout'
import { IoIosArrowForward } from 'react-icons/io'
import { Paths } from '../../router/paths'
import { PuffLoader } from "react-spinners"

const SingleProduct = () => {
    // Debe tener el mismo nombre que la ruta dinámica
    // si la ruta dice /products/:product, se extrae product
    // si la ruta dice /products/:id, se extrae id
    const { id } = useParams()
    const API = "https://dummyjson.com/products"

    const [product, setProduct] = useState<DummyProduct>()

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`${API}/${id}`)
            const data = await response.json()
            setProduct(data)
        }

        getProduct()
    }, [])

    if (!product) {
        return (
            <PuffLoader size='100px' color="#000000" />
        )
    }

    return (
        <BaseLayout>
            <HStack justifyContent='center'>
                <HStack w='900px' justifyContent='space-between'>
                    <Image src={product?.thumbnail} />
                    <VStack align='start'>
                        <Breadcrumb as='div' spacing='8px' separator={<IoIosArrowForward />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to={Paths.home}>Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to={Paths.products}>Products</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink as={Link} href='#'>{product?.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <Heading>{product?.title}</Heading>
                        <Text fontSize='sm' w={500}>{product?.description}</Text>
                        <Text fontSize='3xl'>$ {product?.price}</Text>
                        <Button>Agregar al carrito</Button>
                    </VStack>
                </HStack>
            </HStack>
        </BaseLayout>
    )
}

export default SingleProduct