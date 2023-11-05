'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { cn } from '@/lib/utils';

import { IColor } from '@/entities/Color';
import { ISize } from '@/entities/Size';

import Button from '@/components/ui/button';

interface IFilterProps {
  name: string;
  valueKey: string;
  data: (ISize | IColor)[];
}

export function Filter({ name, valueKey, data }: IFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  function onClick(id: string) {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibol">{name}</h3>

      <hr className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'bg-white text-gray-800 border border-gray-300 rounded-md text-sm p-2',
                selectedValue === filter.id && 'bg-black text-white',
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
