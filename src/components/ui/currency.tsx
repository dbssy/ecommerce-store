'use client';

import { useEffect, useState } from 'react';

import { formatter } from '@/lib/utils';

interface ICurrencyProps {
  value?: string | number;
}

export function Currency({ value }: ICurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
