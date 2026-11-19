import { create } from 'zustand'

interface NameStoreType {
    name: string
    setName: (text: string) => void
}

export const useNameStore = create<NameStoreType>()((set) => ({
    name: "Donatto desde Zustand",
    setName: (text: string) => set({ name: text })
}))