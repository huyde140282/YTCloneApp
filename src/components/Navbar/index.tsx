'use client';
import Link from 'next/link';
import React from 'react';
import { RiMovie2Fill } from 'react-icons/ri';
import { useHandleLogout } from './modules/handeLogout';

const Navbar: React.FC = () => {
  const { handleLogout, user } = useHandleLogout();
  return (
    <nav className="container mx-auto flex md:flex-row flex-col md:justify-between md:items-center pt-5 pb-7 px-6 border-b-4 border-[#007aff]">
      {/* Logo and Title */}
      <Link href="/">
        <div className="flex items-center justify-center cursor-pointer">
          <RiMovie2Fill className="h-8 w-8 text-[#007aff]" />
          <h1 className="text-3xl font-bold text-[#007aff] ml-2">
            Funny Movie
          </h1>
        </div>
      </Link>

      {/* Username and Logout Button */}
      <div className="flex flex-wrap lg:flex-row items-center justify-center min-w-max">
        <span className="text-white mr-4">{user && user.email}</span>
        <Link href="/share-video">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2">
            Share a movie
          </button>
        </Link>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
