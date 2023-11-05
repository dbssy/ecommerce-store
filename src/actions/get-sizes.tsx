import { ISize } from '@/entities/Size';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export async function getSizes(): Promise<ISize[]> {
  const response = await fetch(URL);

  return response.json();
}
