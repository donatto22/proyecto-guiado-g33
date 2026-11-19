import { create } from 'zustand'

interface CounterStoreType {
    count: number
    increase: () => void
    decrease: () => void
}

export const useCounterStore = create<CounterStoreType>()((set, get) => ({
    count: 0,
    increase: () => set({ count: get().count + 1 }),
    decrease: () => set({ count: get().count - 1 })
}))