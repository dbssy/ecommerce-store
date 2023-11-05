import { IBillboard } from '@/entities/Billboard';

export interface ICategory {
  id: string;
  name: string;
  billboard: IBillboard;
}
