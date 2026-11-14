import { Link, Box, Button, FormControl, FormLabel, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import type { SyntheticEvent } from 'react'

import { Link as RouterLink } from 'react-router-dom'

const Login = () => {
    const mostrarDatos = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        console.log(data)

        // login
        const API = 'https://dummyjson.com/auth/login'

        const response = await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })

        const loginData = await response.json()
        localStorage.setItem('user', JSON.stringify(loginData))
    }


    return (
        // Un div que ya tiene display flex, con flex-direction: row
        // Horizontal Stack
        <HStack h='100dvh'>
            <Box h='100%' w='50%' bgSize='cover'
                bgImage='https://images.pexels.com/photos/37741229/pexels-photo-37741229.jpeg' />

            {/* Vertical Stack, div con display flex pero flex-direction: column */}
            {/* Por defecto ya tiene justify-content: center */}
            <VStack w='50%' gap='3em'>
                <Heading>Nombre de la marca</Heading>
                <VStack gap='2em' alignItems='start' as='form' onSubmit={(e) => mostrarDatos(e)}>
                    <FormControl>
                        <FormLabel>Usuario</FormLabel>
                        <Input name='username' type='text' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Contraseña</FormLabel>
                        <Input name='password' type='password' />
                    </FormControl>

                    <Link as={RouterLink} color='teal'>Olvidaste tu contraseña</Link>

                    <Button w='100%' colorScheme='teal' type='submit'>Ingresar</Button>
                </VStack>
            </VStack>
        </HStack>
    )
}

export default Login