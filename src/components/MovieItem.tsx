import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeMovie } from '../store/reducers';
import { Movie } from '../store/types';
import '../style.css';
import ConfirmationPopup from './ConfirmationPopup';

interface Props {
  movie: Movie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleRemoveMovie = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirm = () => {
    dispatch(removeMovie(movie.id));
    setShowPopup(false);
  };

  return (
    <div className={`movie-card ${movie.watched ? 'watched' : ''}`}>
      <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
      <p>{movie.watched ? 'Watched' : 'To Watch'}</p>
      <button className="bg-red-500 text-white mt-2 px-4 py-2 rounded" onClick={handleRemoveMovie}>
        Remove
      </button>
      {showPopup && (
        <ConfirmationPopup
          message="Are you sure you want to delete this movie?"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default MovieItem;
