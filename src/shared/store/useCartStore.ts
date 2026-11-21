import { create } from 'zustand'

interface Product {
    id: number
    title: string
    price: number
    thumbnail: string
}

export interface CartItem extends Product {
    quantity: number
}

interface CartState {
    items: Array<CartItem>
    addItem: (product: Product) => void
    increase: (id: number) => void
    decrease: (id: number) => void
    removeItem: (id: number) => void
    clear: () => void
}

export const useCartStore = create<CartState>()((set, get) => ({
    items: [],
    addItem: (product) => {
        // items anteriores
        const items = get().items
        // debemos verificar si es que el producto ya estaba agregado antes
        const exists = items.some((i) => i.id == product.id)

        // si realmente existe, debemos aumentar la cantidad
        if (exists) {
            set({
                items: items.map((i) => i.id == product.id ? { ...i, quantity: i.quantity + 1 } : i)
            })
        }
        // si no existe, debemos agregarlo por primera vez pero con la cantidad de 1
        else {
            set({ items: [...items, { ...product, quantity: 1 }] })
        }
    },
    increase: (id) => set({
        items: get().items.map((i) => i.id == id ? { ...i, quantity: i.quantity + 1 } : i)
    }),
    // no solo es reducir en 1 la cantidad. Si la cantidad ya es 1, debería eliminarse
    decrease: (id) => set({
        items: get().items.map((i) => i.id == id ? { ...i, quantity: i.quantity - 1 } : i).filter((i) => i.quantity > 0)
    }),
    removeItem: (id) => set({ items: get().items.filter((i) => i.id != id) }),
    clear: () => set({ items: [] })
}))