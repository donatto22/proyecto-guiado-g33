import { Box, Button, Heading } from '@chakra-ui/react'
import BaseLayout from '../../shared/layout/BaseLayout'
import { useUser } from '../../shared/hooks/useUser'
import { useNameStore } from '../../shared/store/useNameStore'
import { useCounterStore } from '../../shared/store/useCounterStore'

const Home = () => {
    const { age } = useUser()
    const { name, setName } = useNameStore()

    const { count, increase, decrease } = useCounterStore()

    return (
        <BaseLayout>
            <Box bgColor='teal.400' color='teal.100'>
                <Heading as='h1' size='2xl' _hover={{ color: 'rebeccapurple' }}>
                    {name}

                    {age}
                </Heading>
                <Button size='lg' colorScheme='blackAlpha' onClick={() => setName("Pepe")}>Dame click para cambiar el nombre</Button>

                <Button size='sm' onClick={decrease}>-</Button>
                {count}
                <Button size='sm' onClick={increase}>+</Button>
            </Box>
        </BaseLayout>
    )
}

export default Home