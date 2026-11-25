import { Box, Button } from '@chakra-ui/react'
import BaseLayout from '../../shared/layout/BaseLayout'
import { useCounterStore } from '../../shared/store/useCounterStore'

const Home = () => {
    const { count, increase, decrease } = useCounterStore()

    return (
        <BaseLayout>
            <Box bgColor='teal.400' color='teal.100'>

                <Button size='sm' onClick={decrease}>-</Button>
                {count}
                <Button size='sm' onClick={increase}>+</Button>
            </Box>
        </BaseLayout>
    )
}

export default Home