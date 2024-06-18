// components/header.js

import React from 'react';
import Link from 'next/link';
import ThemeController from "../components/ThemeController";

const Header = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">NextTech</span>
        </a>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
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

    <ThemeController/>
  </div>
</header>
  );
};

export default Header;
