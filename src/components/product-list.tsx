import { IProduct } from '@/entities/Product';

import { NoResults } from '@/components/ui/no-results';
import { ProductCard } from '@/components/ui/product-card';

interface IProductListProps {
  title: string;
  items: IProduct[];
}

export function ProductList({ title, items }: IProductListProps) {
  const hasProducts = items.length > 0;

  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>

      {!hasProducts && <NoResults />}

      {hasProducts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}
