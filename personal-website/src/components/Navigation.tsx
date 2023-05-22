import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'

const routes = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resume', href: '/resume' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navigation() {
  const [currentPath, setCurrentPath] = useState(useLocation().pathname)

  return (
    <Disclosure as="nav" className="bg-slate-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* mobile menu buttons */}
          </div>
          <div className="m-auto items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div> */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {routes.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      (currentPath.includes(item.href) && item.href !== '/') ||
                        (currentPath === '/' && item.href === '/')
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    aria-current={
                      currentPath.includes(item.href) ? 'page' : undefined
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

export default Navigation
