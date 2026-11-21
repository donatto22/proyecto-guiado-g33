import type { FC } from 'react'
import { Text, VStack } from '@chakra-ui/react'
import { PuffLoader } from "react-spinners"

interface Loader {
    text: string
}

const LoaderRoute: FC<Loader> = ({ text }) => {
    return (
        <VStack height='100vh' justifyContent='center'>
            <PuffLoader color="#36d7b7" />
            <Text fontSize='xl'>{text}</Text>
        </VStack>
    )
}

export default LoaderRoute