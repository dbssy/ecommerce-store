import { IBillboard } from '@/entities/Billboard';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(id: string): Promise<IBillboard> {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}
