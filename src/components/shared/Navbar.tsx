"use client";

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
import logo from "@/assets/logo/smartmeal.svg";

const NAV_ITEMS = [
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog" },
  { title: "Hover Card", href: "/docs/primitives/hover-card" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white  shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-6">
        {/*--------- Logo ----------------*/}
        <Link href="/" className="relative overflow-hidden">
  <Image
    className="object-fill brightness-110 transition-transform duration-300 hover:scale-110"
    src={logo}
    width={100}
    height={60}
    alt="Smart Meal"
    priority
  />
</Link>

        {/* Search Bar - Hidden on Small Screens */}
        <div className="hidden md:flex flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/*-------------- Desktop Navigation---------------- */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/*------------- Menu Dropdown-----------------------*/}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] p-3 space-y-2">
                    {NAV_ITEMS.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/*----------- Shop Dropdown -----------------*/}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                          <Image
                            width={140}
                            height={140}
                            alt="Smart Meal"
                            src="https://feedy.jwsuperthemes.com/wp-content/uploads/2023/09/Salad-PNG-Image.png"
                          />
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                            Healthy food, drinks and groceries avaiable for delivery or pickup .Great discount for first delivery
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction" />
                    <ListItem href="/docs/installation" title="Installation" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/*--------------- Icons --------------------*/}
          <Button variant="outline" className="rounded-full p-2">
            <Heart size={20} />
          </Button>
          <Link href="/cart">
            <Button variant="outline" className="rounded-full p-2">
              <ShoppingBag size={20} />
            </Button>
          </Link>
        </div>

        {/*---------------- Mobile Menu Button -----------------------*/}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {/*---------------- Mobile Menu Dropdown-------------------- */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <Link href="#" className="hover:text-purple-600">About</Link>
            <Link href="#" className="hover:text-purple-600">Contact</Link>
            <Button variant="outline" className="rounded-full p-2">
              <Heart size={20} />
            </Button>
            <Link href="/cart">
              <Button variant="outline" className="rounded-full p-2">
                <ShoppingBag size={20} />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

//--------------- ListItem Component---------------
function ListItem({ title, href }: { title: string; href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block p-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="text-sm font-medium">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
