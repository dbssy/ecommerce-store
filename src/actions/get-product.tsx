import { IProduct } from '@/entities/Product';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export async function getProduct(id: string): Promise<IProduct> {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}
