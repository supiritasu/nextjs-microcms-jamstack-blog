// components/Drawer.js
import React from 'react';
import Link from 'next/link';
import BlogList from './bloglist';

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center">
                <div className="mr-4 md:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </label>
                </div>
                <Link href="/">
                  <a className="flex title-font font-medium items-center text-white md:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">NextTech</span>
                  </a>
                </Link>
              </div>
              <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
                <Link href="/about">
                  <a className="mr-5 transition-transform duration-300 hover:scale-110">About</a>
                </Link>
                <Link href="/blog">
                  <a className="mr-5 transition-transform duration-300 hover:scale-110">Blog</a>
                </Link>
                <Link href="/contact">
                  <a className="mr-5 transition-transform duration-300 hover:scale-110">Contact</a>
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Drawer content */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-900 text-gray-400">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
