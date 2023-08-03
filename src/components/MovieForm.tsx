import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addMovie } from '../store/reducers';
import { Movie } from '../store/types';
import '../style.css';

const MovieForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [watched, setWatched] = useState(false);

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (title.trim() && director.trim() && genre.trim()) {
      const newMovie: Movie = {
        id: uuid(),
        title: title.trim(),
        director: director.trim(),
        genre: genre.trim(),
        watched,
      };

      dispatch(addMovie(newMovie));
      setTitle('');
      setDirector('');
      setGenre('');
      setWatched(false);
    }
  };

  return (
    <div className="add-movie-form">
      <h2 className="text-xl font-semibold mb-2">Add Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="input-field"
      />
     <label>
    <input
      type="checkbox"
      checked={watched}
      onChange={(e) => setWatched(e.target.checked)}
      className="mr-2"
    />
    <span className="watched-label">Watched</span>
  </label>
      <button className="add-movie-button" onClick={handleAddMovie}>
        Add Movie
      </button>
    </div>
  );
};

export default MovieForm;
