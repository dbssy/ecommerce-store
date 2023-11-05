import { ICategory } from '@/entities/Category';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories(): Promise<ICategory[]> {
  const response = await fetch(URL);

  return response.json();
}
