import React from 'react';
import { TextField, ThemeProvider, MenuItem, createTheme} from '@mui/material';

import "./Header.css";
import   categories from "../../data/categories.js";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
   
  return (
    
    
    <div className='header'>
        <span className='title'> Dictonary </span>
        <div className='inputs'> 
       
        <ThemeProvider theme={darkTheme}>
        <TextField id="standard-basic" label="Standard" />
        <TextField 
          id="standard-select-currency"
          select
          label="Select"
          
          helperText="Please select your currency"
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