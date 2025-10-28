import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function FilmDetail({ films }) {
  const { id } = useParams();
  const film = films.find((f) => f.id === parseInt(id));

  if (!film) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl mb-6">😕</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Film Not Found</h2>
          <p className="text-gray-600 mb-8">The film you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <span>←</span>
            <span>Back to Films</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 mb-8 transition-colors duration-300 font-medium"
        >
          <span className="text-xl">←</span>
          <span>Back to Films</span>
        </Link>

        {/* Film Detail Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Poster Section */}
              <div className="lg:w-2/5">
                <div className="h-96 lg:h-full relative">
                  <img 
                    src={film.poster} 
                    alt={film.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x900/667eea/ffffff?text=${encodeURIComponent(film.title)}`;
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {film.year}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">{film.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                    <span>🎬</span>
                    <span className="font-semibold">{film.director}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    <span>⭐</span>
                    <span className="font-semibold">{film.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                    <span>⏱️</span>
                    <span className="font-semibold">{film.duration}</span>
                  </div>
                </div>

                {/* Genre Tags */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {film.genre?.split(',').map((genre, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {genre.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Synopsis */}
                {film.synopsis && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="mr-3">📖</span>
                      Synopsis
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500">
                      {film.synopsis}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                    <span>❤️</span>
                    <span>Add to Favorites</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
                    <span>📝</span>
                    <span>Write Review</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                    <span>🎟️</span>
                    <span>Get Tickets</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}