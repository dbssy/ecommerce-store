import { ICategory } from '@/entities/Category';
import { IColor } from '@/entities/Color';
import { IImage } from '@/entities/Image';
import { ISize } from '@/entities/Size';

export interface IProduct {
  id: string;
  category: ICategory;
  name: string;
  price: string;
  isFeatured: boolean;
  size: ISize;
  color: IColor;
  images: IImage[];
}
