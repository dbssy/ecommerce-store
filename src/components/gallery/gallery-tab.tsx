import { Tab } from '@headlessui/react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { IImage } from '@/entities/Image';

interface IGalleryTabProps {
  image: IImage;
}

export function GalleryTab({ image }: IGalleryTabProps) {
  return (
    <Tab className="bg-white rounded-md aspect-square flex items-center justify-center cursor-pointer relative">
      {({ selected }) => (
        <div>
          <span className="rounded-md w-full h-full aspect-square inset-0 absolute overflow-hidden">
            <Image
              src={image.url}
              alt="Imagem do Produto"
              fill
              className="object-cover object-center"
            />
          </span>

          <span
            className={cn(
              'rounded-md ring-2 ring-offset-2 inset-0 absolute',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  );
}
