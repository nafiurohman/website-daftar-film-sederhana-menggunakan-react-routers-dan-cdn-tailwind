import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FilmList from './components/FilmList';
import FilmDetail from './components/FilmDetail';
import films from './data/films';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FilmList films={films} />} />
            <Route path="/detail/:id" element={<FilmDetail films={films} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;