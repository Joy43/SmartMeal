import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import logo from "@/assets/logo/smartmeal.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Logo */}
        <div className="flex justify-center ">
          <Image className="bg-transparent" src={logo} width={250} height={100} alt="SmartMeal Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-12 
        text-gray-700 font-medium text-lg mb-2">
          <li><a href="#" className="hover:text-indigo-600 transition">Pagedone</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Products</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Resources</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Blogs</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Support</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-gray-700 mb-2">
          <a href="#" className="hover:text-indigo-600 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          © 2025 <a href="https://pagedone.io/" className="hover:text-indigo-600 transition">SmartMeal</a>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
