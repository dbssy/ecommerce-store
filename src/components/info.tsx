'use client';

import { ShoppingCart } from 'lucide-react';

import { IProduct } from '@/entities/Product';

import Button from '@/components/ui/button';
import { Currency } from '@/components/ui/currency';

interface IInfoProps {
  data: IProduct;
}

export function Info({ data }: IInfoProps) {
  return (
    <div>
      <h1 className="text-gray-900 text-3xl font-bold">{data.name}</h1>

      <div className="flex items-center justify-between mt-3">
        <p className="text-gray-900 text-2xl">
          <Currency value={data.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="text-black font-semibold">Tamanho:</h3>

          <div>{data?.size?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="text-black font-semibold">Cor:</h3>

          <div
            className="w-6 h-6 border border-gray-600 rounded-full"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>

        <div className="flex items-center gap-x-3 mt-10">
          <Button className="flex items-center gap-x-2">
            Adicionar ao Carrinho
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
}
