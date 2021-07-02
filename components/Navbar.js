import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  HomeIcon,
  UserIcon,
  BookmarkIcon,
  MenuIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

const solutions = [
  {
    name: 'Inicio',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Produtos',
    description: "Your customers' data will be safe and secure.",
    href: '/',
    icon: ViewGridIcon,
  },
];

export default function Navbar() {
  return (
    <Popover className="relative bg-gray-100 z-50 shadow-lg text-xl ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="text-gray-700 flex justify-start lg:w-0 lg:flex-1">
                DS
              </div>
              <div className="-mr-2 -my-2 md:hidden p-6">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <button className="inline-flex px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:bg-yellow-700 rounded-md ml-6 mb-3 transition delay-50">
                  <Link href="/">Inicio</Link>
                </button>
                <button className="inline-flex px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:bg-yellow-700 rounded-md ml-6 mb-3 transition delay-50">
                  <Link href="/">Produtos</Link>
                </button>
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div></div>
                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            <Link href={item.href}>{item.name}</Link>
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
