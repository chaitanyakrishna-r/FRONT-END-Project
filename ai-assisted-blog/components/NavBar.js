// components/Navbar.jsx

"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className=" mx-auto container flex justify-between items-center w-full ">
        <Link href="/">
          <div className="text-lg font-bold">CkBlog</div>
        </Link>

        <div
          className={`  space-x-4 flex flex-col  md:flex-row md:items-center md:gap-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Button variant="outline">Login</Button>
          <Button variant="outline">SignUp</Button>
        </div>
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={toggleMenu}
        >
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>CkBlog</SheetTitle>
                <SheetDescription>
                  <div
                    className={`  space-x-4 flex flex-col  md:flex-row md:items-center md:gap-4 ${
                      isOpen ? "block" : "hidden"
                    } md:block`}
                  >
                    <Link href="/" className="hover:text-gray-400">
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-400">
                      About
                    </Link>
                    <Link href="/blog" className="hover:text-gray-400">
                      Blog
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400">
                      Contact
                    </Link>
                    <Button variant="outline">Login</Button>
                    <Button variant="outline">SignUp</Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
