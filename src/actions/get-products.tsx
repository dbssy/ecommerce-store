import qs from 'query-string';

import { IProduct } from '@/entities/Product';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface IQuery {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

export async function getProducts(query: IQuery): Promise<IProduct[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);

  return response.json();
}
