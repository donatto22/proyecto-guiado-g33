import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useCartStore } from '../../../shared/store/useCartStore'
import { toast } from 'sonner'

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

                <Text fontSize='2xl'>{product.title}</Text>
                <Text fontSize='xl' fontWeight='bold'>$ {product.price}</Text>
                <Button w='100%' colorScheme='teal' variant='outline' onClick={() => addProduct(product)}>Agregar al carrito</Button>
            </VStack>
        </HStack>
    )
}

export default ProductsCard