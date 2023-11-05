'use client';

import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useCart from '@/hooks/use-cart';

import Button from '@/components/ui/button';

export function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleClick() {
    router.push('/cart');
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <Button
        onClick={handleClick}
        className="bg-black rounded-full px-4 py-2 flex items-center"
      >
        <ShoppingBag size={20} color="white" />

        <span className="text-white text-sm font-medium ml-2">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
