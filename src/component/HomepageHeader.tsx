// components/HomepageHeader.tsx

import Image from 'next/image';

export default function HomepageHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo + App Name */}
      <div className="flex items-center">
        <Image src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="Instagram Logo" width={40} height={40} />
        <span className="ml-2 text-2xl font-bold">
          <span className="text-pink-600">Insta</span>
          <span className="text-orange-500">Analytics</span>
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <input
          type="text"
          placeholder="Search influenssscers by username or name..."
          className="w-full px-4 py-2 border rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-700"
        />
      </div>

      {/* Sign in with Google */}
      <button
        type="button"
        className="flex items-center px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white hover:bg-gray-50 transition"
      >
        <Image src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="Google logo" width={20} height={20} />
        <span className="ml-2">Sign in with Google</span>
      </button>
    </header>
  );
}
