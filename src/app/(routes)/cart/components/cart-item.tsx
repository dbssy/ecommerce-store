'use client';

import { X } from 'lucide-react';
import Image from 'next/image';

import useCart from '@/hooks/use-cart';

import { IProduct } from '@/entities/Product';

import { Currency } from '@/components/ui/currency';
import { IconButton } from '@/components/ui/icon-button';

interface ICartItemProps {
  data: IProduct;
}

export function CartItem({ data }: ICartItemProps) {
  const cart = useCart();

  function onRemove() {
    cart.removeItem(data.id);
  }

  return (
    <li className="border-b flex py-6">
      <div className="rounded-md w-24 sm:w-48 h-24 sm:h-48 relative overflow-hidden">
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between ml-4 sm:ml-6 relative">
        <div className="top-0 right-0 z-10 absolute">
          <IconButton onClick={onRemove} icon={<X size={16} />} />
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 pr-9 sm:pr-0 relative">
          <div className="flex justify-between">
            <p className="text-black text-lg font-semibold">{data.name}</p>
          </div>

          <div className="text-sm flex mt-1">
            <p className="text-gray-500 border-r border-gray-200 mr-4 pr-4">
              {data.size.name}
            </p>
            <p className="text-gray-500">{data.color.name}</p>
          </div>

          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
