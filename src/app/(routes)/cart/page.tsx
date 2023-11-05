'use client';

import { useEffect, useState } from 'react';

import useCart from '@/hooks/use-cart';

import { Container } from '@/components/ui/container';

import { CartItem } from './components/cart-item';
import { Summary } from './components/summary';

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();

  const hasProducts = cart.items.length > 0;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-black text-3xl font-bold">Carrinho</h1>

          <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12 mt-12">
            <div className="lg:col-span-7">
              {!hasProducts && (
                <p className="text-neutral-500">
                  Nenhum produto foi adicionado ao carrinho.
                </p>
              )}

              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
