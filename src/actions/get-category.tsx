import { ICategory } from '@/entities/Category';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategory(id: string): Promise<ICategory> {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}
