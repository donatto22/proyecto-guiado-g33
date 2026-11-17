import { createContext, useContext, type Dispatch } from 'react'
import type { DummyUser } from '../../modules/dummyUser'

export const UserContext = createContext<UserContextType | null>(null)

interface UserContextType {
    names: Array<string>
    age: number
    user: DummyUser
    setNames: Dispatch<React.SetStateAction<string[]>>
    setAge: Dispatch<React.SetStateAction<number>>
    setUser: Dispatch<React.SetStateAction<DummyUser>>
    logout: () => void
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (context == null) {
        throw new Error("useUser debe usarse dentro del provedor")
    }

    return context
}