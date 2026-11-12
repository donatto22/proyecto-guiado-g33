import { Box, Button, Heading } from '@chakra-ui/react'
import BaseLayout from '../../shared/layout/BaseLayout'

const Home = () => {
    return (
        <BaseLayout>
            <Box bgColor='teal.400' color='teal.100'>
                <Heading as='h1' size='2xl' _hover={{ color: 'rebeccapurple' }}>Este es un título</Heading>
                <Button size='lg' colorScheme='blackAlpha'>Dame click</Button>
            </Box>
        </BaseLayout>
    )
}

export default Home