// components/Navbar.jsx

"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <Link href="/">CkBlog</Link>
      </div>
      <div className={`flex flex-col md:flex-row md:items-center md:gap-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        <div>
      <Button variant="outline">Login</Button>
      <Button variant="outline">SignUp</Button>
      </div>
      </div>
      <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
        <span className="h-1 w-6 bg-white mb-1"></span>
        <span className="h-1 w-6 bg-white mb-1"></span>
        <span className="h-1 w-6 bg-white"></span>
      </div>
     
        
    </nav>
  );
};

export default Navbar;
