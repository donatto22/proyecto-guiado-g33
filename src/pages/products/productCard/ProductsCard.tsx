import { Button, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import { useCartStore } from '../../../shared/store/useCartStore'
import { toast } from 'sonner'
import { Link as RouterLink } from 'react-router-dom'
import { Paths } from '../../../router/paths'

const ProductsCard = ({ product }) => {
    const { addItem } = useCartStore()

    const addProduct = (product) => {
        addItem(product)
        toast.success('Se agregó el producto')
    }

    return (
        <HStack justifyContent='center'>
            <VStack w={300} align='start' boxShadow='0 0 10px gray' borderRadius='20px' p='2em'>
                <Image w={200} h={200} objectFit='cover' src={product.thumbnail} />

                <Link as={RouterLink} to={Paths.products + '/' + product.id} fontSize='2xl'>{product.title}</Link>
                <Text fontSize='xl' fontWeight='bold'>$ {product.price}</Text>
                <Button w='100%' colorScheme='teal' variant='outline' onClick={() => addProduct(product)}>Agregar al carrito</Button>
            </VStack>
        </HStack>
    )
}

export default ProductsCard