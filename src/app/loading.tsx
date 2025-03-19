
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo/smartmeal.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <Image width={300} height={300} alt="Smart Meal Logo" src={logo} className="mb-6" />
      
    </div>
  );
}
