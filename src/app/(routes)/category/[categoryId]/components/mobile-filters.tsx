'use client';

import { Plus, X } from 'lucide-react';
import { useState } from 'react';

import { IColor } from '@/entities/Color';
import { ISize } from '@/entities/Size';

import Button from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Dialog } from '@headlessui/react';

import { Filter } from './filter';

interface IMobileFiltersProps {
  sizes: ISize[];
  colors: IColor[];
}

export function MobileFilters({ sizes, colors }: IMobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filtros
        <Plus size={20} />
      </Button>

      <Dialog
        as="div"
        className="lg:hidden z-40 relative"
        open={isOpen}
        onClose={onClose}
      >
        <div className="bg-black bg-opacity-25 inset-0 fixed" />

        <div className="flex inset-0 z-40 fixed">
          <Dialog.Panel className="bg-white py-4 pb-6 shadow-xl w-full max-w-xs h-full ml-auto flex flex-col relative overflow-y-auto">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={16} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter name="Tamanhos" valueKey="sizeId" data={sizes} />

              <Filter name="Cores" valueKey="colorId" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
