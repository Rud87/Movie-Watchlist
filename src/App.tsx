import React from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-3xl font-semibold mb-4">My Movie Watchlist</h1>
      <MovieForm/>
      <MovieList/>
    </div>
  );
};



export default App;