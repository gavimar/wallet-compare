import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import Home from './components/Home'


function App() {

  

  return (

    
    <ThemeProvider theme={theme}>
      
      <Home />

    </ThemeProvider>
    
  );
}

export default App;

