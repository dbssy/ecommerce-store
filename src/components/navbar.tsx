import Link from 'next/link';

import { getCategories } from '@/actions/get-categories';

import { Container } from '@/components/ui/container';

import { MainNav } from '@/components/main-nav';
import { NavbarActions } from '@/components/navbar-actions';

export const revalidate = 0;

export async function Navbar() {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center relative">
          <Link href="/" className="flex gap-x-2 ml-4 lg:ml-0">
            <p className="text-xl font-bold">STORE</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </header>
  );
}
