import { Box, Button, Heading, Text } from '@chakra-ui/react'
import BaseLayout from '../../shared/layout/BaseLayout'
import { useUser } from '../../shared/hooks/useUser'

const Home = () => {
    const { age, names, setAge } = useUser()

    return (
        <BaseLayout>
            <Box bgColor='teal.400' color='teal.100'>
                <Heading as='h1' size='2xl' _hover={{ color: 'rebeccapurple' }}>
                    {
                        names.map(n => <Text>{n}</Text>)
                    }

                    {age}
                </Heading>
                <Button size='lg' colorScheme='blackAlpha' onClick={() => setAge((prev) => prev - 1)}>Dame click para reducir la edad</Button>
            </Box>
        </BaseLayout>
    )
}

export default Home