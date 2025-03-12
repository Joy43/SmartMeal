'use client';
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo/smartmeal.svg"


const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
   
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-around p-3 md:px-6">
        {/*------- Logo ----------*/}
        <Link href="/" className=" w-full h-20 text-gray-900 dark:text-white">
          <Image src={logo} width={150} height={60} alt="Smart Meal">
          </Image>
        </Link>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:flex flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px]">
                    {components.map((component) => (
                      <ListItem key={component.title}
                       title={component.title} href={component.href}>
                        {component.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gray-100 dark:bg-gray-800 p-6 no-underline outline-none hover:bg-gray-200 dark:hover:bg-gray-700">
                          <Image width={150} height={150} alt="Smart Meal" src="https://feedy.jwsuperthemes.com/wp-content/uploads/2023/09/Salad-PNG-Image.png" />
                          <p className="text-sm leading-tight text-gray-600 dark:text-gray-300">
                            Beautifully designed components built with Radix UI and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Link href="/cart">
            <Button variant="outline" className="rounded-full p-0 size-10">
              <ShoppingBag />
            </Button>
          </Link>
        </div>

        {/* ----------Mobile Menu Button -------------*/}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/*------------- Mobile Menu Dropdown------------- */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4">
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Link href="#" className="hover:text-purple-600">About</Link>
            <Link href="#" className="hover:text-purple-600">Contact</Link>
            <Button variant="outline" className="rounded-full p-0 size-10">
              <Heart />
            </Button>
            <Link href="/cart">
              <Button variant="outline" className="rounded-full p-0 size-10">
                <ShoppingBag />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// ListItem Component
function ListItem({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
