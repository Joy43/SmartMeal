import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo/smartmeal.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <Image width={300} height={300} alt="Smart Meal Logo" src={logo} className="mb-6" />
      <h1 className="text-4xl font-semibold text-gray-800">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
      
      <Link
        href="/"
        className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
