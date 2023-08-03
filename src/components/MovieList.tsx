import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import { Movie } from '../store/types';
import { RootState } from '../store';
import '../style.css';

const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);

  return (
    <div className="movie-list">
      {movies.map((movie: Movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
