import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🎬</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Cinema Collection
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/10 transform hover:-translate-y-0.5"
            >
              <span className="text-xl">🏠</span>
              <span>Home</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}