import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { routes } from '../data/data'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navigation() {
  const currentPath = useLocation().pathname
  const [open, setOpen] = useState(false)

  return (
    <Disclosure as="nav" className="bg-slate-800 drop-shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* mobile menu buttons */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => {
                setOpen(!open)
              }}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          {/* mobile menu */}
          <div className="sm:hidden">
            <div
              className={`absolute space-y-1 px-2 pb-3 pt-2 ${
                open ? 'bg-slate-800 mt-10 w-72 drop-shadow-lg rounded-md ' : ''
              }`}
            >
              {routes.map((item) => {
                if (open === true && item.nav === true) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        (currentPath.includes(item.href) &&
                          item.href !== '/') ||
                          '/#' + currentPath === item.href ||
                          (currentPath === '/' && item.href === '/')
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                      aria-current={
                        currentPath.includes(item.href) ? 'page' : undefined
                      }
                    >
                      {item.name}
                    </a>
                  )
                } else {
                  return <></>
                }
              })}
            </div>
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
                {routes.map((item) => {
                  if (item.nav === true) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          (currentPath.includes(item.href) &&
                            item.href !== '/') ||
                            '/#' + currentPath === item.href ||
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
                    )
                  }
                  return <></>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

export default Navigation
