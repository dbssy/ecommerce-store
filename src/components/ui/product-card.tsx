'use client';

import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

import useCart from '@/hooks/use-cart';
import usePreviewModal from '@/hooks/use-preview-modal';

import { IProduct } from '@/entities/Product';

import { Currency } from '@/components/ui/currency';
import { IconButton } from '@/components/ui/icon-button';

interface IProductCardProps {
  data: IProduct;
}

export function ProductCard({ data }: IProductCardProps) {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  function handleClick() {
    router.push(`/product/${data?.id}`);
  }

  function onPreview(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();

    previewModal.onOpen(data);
  }

  function onAddToCart(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();

    cart.addItem(data);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white border rounded-xl p-3 space-y-4 group cursor-pointer"
    >
      <div className="bg-gray-100 rounded-xl aspect-square relative">
        <Image
          src={data?.images?.[0]?.url}
          alt={data.name}
          fill
          className="rounded-md aspect-square object-cover"
        />

        <div className="w-full px-6 bottom-5 absolute opacity-0 group-hover:opacity-100 transition">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />

            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category?.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
