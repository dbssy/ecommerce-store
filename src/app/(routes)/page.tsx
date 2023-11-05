import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';

import { Billboard } from '@/components/ui/billboard';
import { Container } from '@/components/ui/container';

import { ProductList } from '@/components/product-list';

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard('fa60ff59-b531-4807-9c12-c73b2fa8616f');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produtos em Destaque" items={products} />
        </div>
      </div>
    </Container>
  );
}
