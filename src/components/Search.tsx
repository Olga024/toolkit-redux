import { InputBase, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton"
import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { searchMovies } from "../features/movies/moviesApi";


export const Search = () => {
  const [query, setQuery] = useState('');
  const handleChangeQuery = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    //@ts-expect-error
    setQuery(event.target.value);
  }, [setQuery]);

  const dispatch = useDispatch();

  const handleSearch = (query: string) => {
    dispatch(searchMovies(query)) /*  сюда надо экш но у нас его нет т.к. мы используем toolkit */
  };


  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1
        }}
        placeholder="Search"
        value={query}
        onKeyUp={handleChangeQuery}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
