import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      isOpen: false,
      toggleCart: () => set((state) => ({isOpen: !state.isOpen}))
    }),
    {name: "cart-store"}
  )
)