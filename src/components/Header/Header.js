import React from 'react';
import { TextField, ThemeProvider, MenuItem, createTheme} from '@mui/material';

import "./Header.css";
import categories from '../../data/categories';
import { debounce } from '@mui/material/utils';

const Header = ({setcategory, category, word, setWord, setMeanings}) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handlechange = (e) => {
    setcategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

  const handleText = debounce((text) => {
    setWord(text);
  }, 500);
   
  return (
    <div className="header">
    <span className="title">{word ? word : "Dictinory"}</span>
    <div className="inputs">
      <ThemeProvider theme={darkTheme}>
        <TextField
          className="search"
          id="filled-basic"
          label="Search a Word"
          onChange={(e) => handleText(e.target.value)}
        />
        <TextField 
        className="select"
          select
          label="Language"
          value={category}
          onChange={(e) => handlechange(e)}
          
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </ThemeProvider>
    </div>
  </div>
    
    
        
  );
};

export default Header