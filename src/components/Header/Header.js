import React from 'react';
import { TextField, ThemeProvider, MenuItem, createTheme} from '@mui/material';

import "./Header.css";
import categories from '../../data/categories';

const Header = ({setcategory, category, word, setWord}) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handlechange = (Language) => {
    setcategory(Language);
    setWord("");

  };
   
  return (
    
    
    <div className='header'>
        <span className='title'> {word ?  word : "Dictinory"} </span>
        <div className='inputs'> 
       
        <ThemeProvider theme={darkTheme}>
        <TextField  
         className="Search" 
         label="Search a word" 
         value={word}
         onChange={(e) => setWord(e.target.value)}
           />
        <TextField 

        className="select"
          select
          label="Language"
        value = {category}
        onChange ={(e) => handlechange(e.target.value)}
        
        >
          {
            categories.map((option) => 
           <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
            )}
      

      
        </TextField>
       

        </ThemeProvider>
        </div>


    </div>
  )
}

export default Header