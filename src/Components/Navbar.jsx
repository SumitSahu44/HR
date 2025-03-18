import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white max-w-[98%] mx-auto flex justify-between items-center p-4 md:px-8">
      {/* Logo */}
      <img src={logo} className="h-[6vw] max-h-12" alt="Logo" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 text-lg text-gray-600">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Why Us</li>
          <li className="hover:text-gray-900 cursor-pointer">Solutions</li>
          <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
          <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-15 z-90 left-0 w-full bg-white shadow-md p-4  md:hidden">
          <ul className="flex flex-col items-center gap-4 text-lg text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About</li>
            <li className="hover:text-gray-900 cursor-pointer">Why Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Solutions</li>
            <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
