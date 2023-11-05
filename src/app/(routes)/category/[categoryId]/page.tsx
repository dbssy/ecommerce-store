import { getCategory } from '@/actions/get-category';
import { getColors } from '@/actions/get-colors';
import { getProducts } from '@/actions/get-products';
import { getSizes } from '@/actions/get-sizes';

import { Billboard } from '@/components/ui/billboard';
import { Container } from '@/components/ui/container';

import { NoResults } from '@/components/ui/no-results';
import { ProductCard } from '@/components/ui/product-card';

import { Filter } from './components/filter';
import { MobileFilters } from './components/mobile-filters';

export const revalidate = 0;

interface ICategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: ICategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  const hasProducts = products.length > 0;

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />

            <div className="hidden lg:block">
              <Filter name="Tamanhos" valueKey="sizeId" data={sizes} />

              <Filter name="Cores" valueKey="colorId" data={colors} />
            </div>

            <div className="lg:col-span-4 mt-6 lg:mt-0">
              {!hasProducts && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
