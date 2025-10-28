import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmList({ films }) {
  if (!films || films.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 text-center p-8">
        <div className="text-6xl mb-4">🎭</div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Films Available</h3>
        <p className="text-gray-500">There are no films to display at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Featured Films</h2>
        <p className="text-lg text-gray-600">
          Discover our collection of <span className="font-semibold text-purple-600">{films.length}</span> amazing films
        </p>
      </div>
      
      {/* Film Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}

function FilmCard({ film }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Poster Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={film.poster} 
          alt={film.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x600/667eea/ffffff?text=${encodeURIComponent(film.title)}`;
          }}
        />
        <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {film.year}
        </div>
        <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {film.rating}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {film.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <span className="text-sm mr-2">🎬</span>
          <p className="text-sm font-medium truncate">{film.director}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded">{film.genre?.split(',')[0]}</span>
          <span>{film.duration}</span>
        </div>
        
        {film.synopsis && (
          <p className="text-gray-500 text-xs mb-4 line-clamp-2">
            {film.synopsis}
          </p>
        )}
        
        <Link
          to={`/detail/${film.id}`}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 text-sm"
        >
          <span>View Details</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}