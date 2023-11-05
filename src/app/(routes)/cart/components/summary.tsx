'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import useCart from '@/hooks/use-cart';

import Button from '@/components/ui/button';
import { Currency } from '@/components/ui/currency';

export function Summary() {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Pagamento realizado com sucesso!');

      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Ocorreu um erro ao processar seu pagamento!');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  async function onCheckout() {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      },
    );

    window.location = response.data.url;
  }

  return (
    <div className="bg-gray-50 rounded-lg mt-16 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-gray-900 text-lg font-medium">Detalhes do Pedido</h2>

      <div className="space-y-4 mt-6">
        <div className="border-t border-gray-200 flex items-center justify-between pt-4">
          <div className="text-gray-900 text-base font-medium">
            Total do Pedido
          </div>

          <Currency value={totalPrice} />
        </div>
      </div>

      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="w-full mt-6"
      >
        Finalizar Pedido
      </Button>
    </div>
  );
}
