'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';

import { IImage } from '@/entities/Image';

import { GalleryTab } from './gallery-tab';

interface IGalleryProps {
  images: IImage[];
}

export function Gallery({ images }: IGalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="w-full max-w-2xl sm:block lg:max-w-none mx-auto mt-6 hidden">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-square">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="sm:rounded-lg w-full h-full aspect-square relative overflow-hidden">
              <Image
                src={image.url}
                alt="Imagem do Produto"
                fill
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
