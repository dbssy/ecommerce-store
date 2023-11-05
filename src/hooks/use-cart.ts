import toast from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { IProduct } from '@/entities/Product';

interface ICartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: IProduct) => {
        const currentItems = get().items;

        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast('Produto já adicionado ao carrinho!');
        }

        set({ items: [...get().items, data] });

        toast.success('Produto adicionado ao carrinho!');
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });

        toast.success('Produto removido do carrinho!');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
