import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo/smartmeal.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
        
        {/* ----------- Logo --------------*/}
        <div className="flex justify-center">
          <Image 
            className="brightness-110 transition-transform duration-300 hover:scale-105" 
            src={logo} 
            width={100}
            height={80} 
            alt="SmartMeal Logo" 
          />
        </div>

        {/*------------  Navigation Links --------------- */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-700 dark:text-gray-300 font-medium text-lg">
          {["Pagedone", "Products", "Resources", "Blogs", "Support"].map((item, index) => (
            <li key={index}>
              <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
          {[Github, Twitter, Linkedin].map((Icon, index) => (
            <a key={index} href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © 2025 <a href="https://pagedone.io/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">SmartMeal</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
