import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { Fragment } from 'react';

import { IconButton } from '@/components/ui/icon-button';

interface IModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ isOpen, children, onClose }: IModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="z-10 relative" onClose={onClose}>
        <div className="bg-black bg-opacity-50 inset-0 fixed" />

        <div className="inset-0 fixed overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-50 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="rounded-lg w-full max-w-3xl text-left align-middle overflow-hidden">
                <div className="bg-white shadow-2xl w-full px-4 pt-12 pb-8 sm:px-6 sm:pt-8 md:p-6 lg:p-8 flex items-center relative overflow-hidden">
                  <div className="top-4 right-4 absolute">
                    <IconButton onClick={onClose} icon={<X size={16} />} />
                  </div>

                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
