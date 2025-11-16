import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/moviesThunks';

export const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(fetchMovies(query));
  };

  return (
    <div>
      <TextField
        label="Search Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};