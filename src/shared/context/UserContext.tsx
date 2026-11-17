import { useEffect, useState } from 'react'
import { UserContext } from '../hooks/useUser'
import type { DummyUser } from '../../modules/dummyUser'

export const UserProvider = ({ children }) => {
    const [names, setNames] = useState<Array<string>>(['Maria', 'Donatto', 'Cesar'])
    const [age, setAge] = useState<number>(105)
    const [user, setUser] = useState<DummyUser>(() => {
        const saved = localStorage.getItem('user')
        return saved ? JSON.parse(saved) : null
    })

    // 1. Ni bien cargue la aplicación, si ya existe un usuario entonces traer
    // el que estaba guardadoo en el localStorage

    // 2. Cada vez que el usuario cambie, se debe de sincronizar con el localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user')
        }
    }, [user])

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    return <UserContext.Provider value={{ names, age, setNames, setAge, user, setUser, logout }}>{children}</UserContext.Provider>
}

