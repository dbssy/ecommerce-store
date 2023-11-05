import { IColor } from '@/entities/Color';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export async function getColors(): Promise<IColor[]> {
  const response = await fetch(URL);

  return response.json();
}
