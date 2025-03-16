"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, Menu, LogOut } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo/smartmeal.svg";
import { useUser } from "@/context/userContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/app/constants";
import { logout } from "@/services/AuthService";

const NAV_ITEMS = [
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog" },
  { title: "Hover Card", href: "/docs/primitives/hover-card" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <Image src={logo} width={100} height={40} alt="Smart Meal" priority />
        </Link>

        {/* Search Bar - Hidden on Small Screens */}
        <div className="hidden md:flex flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
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
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="rounded-full p-2">
            <Heart size={20} />
          </Button>
          <Link href="/cart">
            <Button variant="outline" className="rounded-full p-2">
              <ShoppingBag size={20} />
            </Button>
          </Link>
        </div>

        {/* User Profile / Login */}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>My Shop</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-red-500 cursor-pointer" onClick={handleLogOut}>
                <LogOut />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login">
            <Button className="rounded-full" variant="outline">Login</Button>
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-purple-500"
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

//------------- ListItem Component-------------
function ListItem({ title, href }: { title: string; href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-3 rounded-md hover:bg-gray-100">
          <div className="text-sm font-medium">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}