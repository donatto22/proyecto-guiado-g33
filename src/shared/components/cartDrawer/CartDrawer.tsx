import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useCartStore } from '../../store/useCartStore'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { FiTrash } from 'react-icons/fi'

const CartDrawer = ({ isOpen, onClose }) => {
    const { items, removeItem, clear, increase, decrease } = useCartStore()

    return (
        <Drawer size='sm'
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrito</DrawerHeader>

                <DrawerBody>
                    {
                        items.length == 0 ? <VStack h='100%' justifyContent='center'>
                            <MdOutlineRemoveShoppingCart fontSize={160} />
                            <Text fontSize='3xl'>Carrito aún vacío</Text>
                        </VStack> :

                            <VStack gap='2em'>
                                {
                                    items.map((i) => <HStack w='100%' justifyContent='space-between' p='10px' borderRadius={10} boxShadow='0 0 40px -30px black'>
                                        <HStack>
                                            <Image src={i.thumbnail} w={100} />
                                            <VStack align='start'>
                                                <Text>{i.title}</Text>
                                                <VStack align='start' gap={0}>
                                                    <Text fontSize='small' color='gray.500'>Unit Price - $ {i.price}</Text>
                                                    <Text fontSize='small' fontWeight='bold' color='teal.500'>Total Price - $ {(i.price * i.quantity).toFixed(2)}</Text>
                                                </VStack>
                                                <HStack>
                                                    <Button size='sm' onClick={() => decrease(i.id)}>-</Button>
                                                    <Text>{i.quantity}</Text>
                                                    <Button size='sm' onClick={() => increase(i.id)}>+</Button>
                                                </HStack>
                                            </VStack>
                                        </HStack>
                                        <Button colorScheme='red' variant='outline' onClick={() => removeItem(i.id)}>
                                            <FiTrash />
                                        </Button>
                                    </HStack>)
                                }
                            </VStack>
                    }
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    {
                        items.length != 0 && <Button colorScheme='blue'>Comprar</Button>
                    }
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer