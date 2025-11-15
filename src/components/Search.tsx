import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, type SetStateAction } from "react";
import { useDispatch } from "react-redux";

export const Search = () => {
  const [query, setQuery] = useState('');
  const handleChangeQuery = (e: { target: { value: SetStateAction<string>; }; }) => {
    setQuery(e.target.value)
  };
  const dispatch = useDispatch();
  const handleClickButton = dispatch(searchMovies(query)) /*moviesThunks*/

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
        onChange={handleChangeQuery}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={handleClickButton}
      >
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}